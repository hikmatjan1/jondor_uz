import React from "react";
import "./asosiyYangiliklar.css";
import { useNavigate } from "react-router-dom";
import { urlFile } from "../../config";


const AsosiyYangililar = ({ news }) => {
  const navigate = useNavigate();

  const navigateHandler = (dat) => {
    navigate("/yangilik_batafsil", {
      state: dat,
    });
  };

  return (
    <section className="asosiy-yangiliklar-section bg-light">
      <div className="row px-2 mt-3 pb-0">
        <div className="col-xl-3 col-lg-12 ">
          <div
            className="p-2 text-light rounded bg-primary title"
            style={{ textTransform: "uppercase" }}
          >
            Buxoro viloyati hokimi
          </div>

          <div className="col-lg-12 pt-3 px-0">
            <div className="card card-hokim">
              <div className="card-img-actions d-flex justify-content-center">
                <img
                  className="img-fluid img-hokim"
                  src="https://buxoro.uz/adminpanel/images/hokim/hokim.png"
                  alt=""
                />

                <div className="profile">
                  <i
                    className="icon-facebook2 text-light mr-2"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="icon-envelop5 text-light"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
              </div>

              <div
                className="card-footer bg-secondary m-0 p-0 d-flex justify-content-center align-items-center position-relative"
                style={{ height: "4.375rem" }}
              >
                <h2 className="font-weight-semibold text-light text-center m-0">
                  Raxmatov Keldiyor
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-9 col-lg-12">
          <div>
            <div
              className="p-2 text-light rounded bg-primary title"
              style={{ textTransform: "uppercase" }}
            >
              Asosiy yangiliklar
            </div>
          </div>

          <div className="boxes">
            {news?.length > 0 &&
              news.map(
                (dat, index) =>
                  dat.actual && (
                    <a
                      key={index}
                      className="position-relative rounded box"
                      style={{ height: "25rem" }}
                      onClick={() => navigateHandler(dat)}
                    >
                      <img
                        src={
                          urlFile + "file/view/" + dat.images[0].generatedName
                        }
                        alt=""
                        className="box-img"
                      />
                      <div className="paragraf">
                        <p className="text-light">{dat.uzTitle}</p>
                      </div>
                    </a>
                  )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsosiyYangililar;
