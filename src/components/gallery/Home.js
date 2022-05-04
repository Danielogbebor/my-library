import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
import './home.css';



const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://mi-linux.wlv.ac.uk/~2022188/codei4app/show_book");
    setUser(result.data.reverse());
  };

  const deleteUser = (bookId) =>
  {
    axios.delete('https://mi-linux.wlv.ac.uk/~2022188/codei4app/delete-book/delete/'+bookId)
    .then((result)=>{
      loadUsers();
    })
    .catch(()=>{
      alert('Book Delete Successful');
      window.location.reload(true);
    });
  };

  return (
    <div className="container text-left">
      <div className="py-4">
          <h3 className="mb-5 text-center homeheader">Books To Rent</h3>
          <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={20}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
              className="mySwiper"
              style={{color: '#000115'}}
            >
              {users.map((user, index) => (
              <SwiperSlide><div className="mt-0 mb-2"><img src={'https://mi-linux.wlv.ac.uk/~2022188/codei4app/'+user.book} alt="" style={{ width: '100%',height: '20rem',margin: 0,padding: 0}}/></div></SwiperSlide>
              ))}
          </Swiper>
          
          <div className="row text-left">
            {users.map((user, index) => (
              <div className="col-md-4 text-center">
                <div className="card m-2 text-left">
                <div className="mt-0 mb-2"><img src={'https://mi-linux.wlv.ac.uk/~2022188/codei4app/'+user.book} alt="" style={{ width: '100%',height: '20rem',margin: 0,padding: 0}}/></div>
                  <div><div className="mx-auto text-center text-capitalize booktitle">{user.book_title}</div></div>
                  <div className="d-flex justify-content-around"><div className="text-capitalize text-left mt-2 mb-3 bookname">{user.book_name}</div><div className="text-capitalize text-right mt-2 mb-3 bookprice">£{user.book_price}</div></div>
                  <div><p className="p-2 border m-3">{(user.book_description).slice(0,80)+'...'}</p></div>
                    <div  className="d-inline mx-auto text-center mb-3">
                      <div className='pull-left bg-success rounded d-inline w25 p-1 m-1'>
                        <Link className="pull-left mr-2 text-white" to={`/gallery/edit/${user.id}`}>
                          <i className="fa fa-book pull-left" aria-hidden="true"></i> Borrow
                        </Link>
                      </div>
                      <div className='pull-right bg-danger rounded d-inline w25 p-1 m-2'>
                        <Link className="pull-right text-white bg-danger" onClick={() => deleteUser(user.id)}>
                        <i className="fa fa-trash pull-right" aria-hidden="true"></i> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
             ))}
          </div>
      </div>
    </div>
  );
};

export default Home;