import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {Link, useParams} from "react-router-dom";
import QRCode from "react-qr-code";
import Print from "./Print";
import html2pdf from "html2pdf.js";
import Modal from "react-modal";


const OrdersDetail = (props) => {
    const [obj, setObj] = useState([])
    const [objItem, setObjItem] = useState({})
    const params = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function makeMoney(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
    }
    useEffect(() =>{
        axios.get(API_PATH + "order/view/" + params.id, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                setObj(res?.data?.data?.tickets)
                setObjItem(res?.data?.data)
            })
    }, [])
    function generatePDF() {
        // Choose the element that your content will be rendered to.
        const element = document.getElementById("invoice");
        // Choose the element and save the PDF for your user.
        html2pdf().from(element).save();
    }

    function mysum(sum) {
        return sum.toLocaleString('ru-RU')
    }

    return (
        <div className="orders">

            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="orders-items  col-lg-12 row ">
                            <h2 className="fw-bold d-flex align-items-center"><img style={{marginRight: "24px"}} src="/images/check.png" alt="check"/>Заказы</h2>
                                                {
                                                    obj?.map((item, index)=>(
                                                        <div className="m-3 items">
                                                            <div className="col-4 pt-3">
                                                                <QRCode
                                                                    size={256}
                                                                    style={{ height: "auto",  width: "130" }}
                                                                    value={item?.qrcode?.qrcode}
                                                                    viewBox={`0 0 256 256`}
                                                                />
                                                            </div>
                                                            <div className="col-1"></div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{objItem?.event?.title}</p>
                                                                <p className="mb-0">{item?.event_date}</p>
                                                                <p className="mb-0">Alpomish muz saroyi</p>
                                                                <p >  Ряд {item?.row + " / "} Место {item?.place}
                                                                </p>


                                                                    <div className="col-8">{mysum(item?.price) + " UZS"}</div>

                                                            </div>


                                                            <div className="col-lg-1">
                                                                <button className="fdown" onClick={openModal}>
                                                                    <img src="/images/down.svg" className="w-100" alt=""/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                        </div>
                    </div>
                </div>
            </div>


            <Modal isOpen={modalIsOpen}
                   contentLabel="Example Modal"
            >
                <div className="w-100 d-flex justify-content-between">
                    <button id="download-button" className="download-button-f" onClick={generatePDF}><img src="/images/printing.png" alt=""/>Скачать в формате PDF</button>
                    <button onClick={closeModal} className="close-button-f"><img src="/images/close22.png" /></button>
                </div>
              <div  className="exportpdf">
                  <div id="invoice"  className="exportpdfitem">
                      <div className="element-to-print-my">
                          <div className="row forpad ">
                              <div className="col-6">
                                  <img src="/images/logo.png" alt="logo" style={{width: "200px"}}/>
                              </div>
                              <div className="col-6">
                                  <p className="mb-0">Qo'llab-quvvatlash xizmati / Служба поддержки</p>
                                  <p  className="mb-0">+99899 939-44-09 / +99890 094-49-88</p>
                              </div>
                          </div>
                          <div className="col-md-12 forpad print-for">
                              <div className="row">

                                  <div className="col-md-6 d-flex align-items-center">
                                      <p> Sana <br/>
                                          Дата</p>
                                      <h3>16.02.2023</h3>
                                  </div>
                                  <div className="col-md-6 d-flex align-items-center">
                                      <p> Vaqt <br/>
                                          Время</p>
                                      <h3> 19:30
                                      </h3>
                                  </div>
                                  <div className="col-md-12 d-flex align-items-center">
                                      <p>Sektor <br/> Сектор</p>
                                      <h3>Блитчер 204</h3>
                                  </div>
                              </div>
                          </div>
                          <div className="row print-for forpad">
                              <div className="col-4">
                                  <div className="col-md-12 d-flex align-items-center ">
                                      <div>
                                          <p className="mb-0">Qator</p>
                                          <p className="mb-0">Ряд </p>
                                      </div>
                                      <h3>{mysum(999999)} UZS</h3>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="col-md-12 d-flex align-items-center ">
                                      <div>
                                          <p className="mb-0">O'rin</p>
                                          <p className="mb-0">Место </p>
                                      </div>
                                      <h3>{mysum(9999999)} UZS</h3>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="col-md-12 d-flex align-items-center ">
                                      <div>
                                          <p className="mb-0">Kirish</p>
                                          <p className="mb-0">Вход </p>
                                      </div>
                                      <h3>18:00</h3>
                                  </div>
                              </div>
                          </div>
                          <div className="row print-for forpad">
                              <div className="col-4">
                                  <div className="col-md-12  ">
                                      <p className="mb-0">Chipta narxi</p>
                                      <p className="mb-0">Цена билета</p>
                                      <h4>{mysum(9999999)} UZS</h4>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="col-md-12  ">
                                      <p className="mb-0">Buyurtma </p>
                                      <p className="mb-0">Заказ </p>
                                      <h4>234404</h4>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="col-md-12  ">
                                      <p className="mb-0">Narxlar kategoriyasi </p>
                                      <p className="mb-0">Ценовая категория </p>
                                      <h4>22б5-45</h4>
                                  </div>
                              </div>
                          </div>
                          <hr className="mt-3  "/>
                          <div className="row forpad print-for">
                              <div className="col-6  "><h4>
                                  XARIDORLAR DIQQATIGA!
                              </h4>
                                  <p>
                                      Chipta xarid qilganda, xaridor iTicket.uz saytida keltirilgan ommaviy ofertaga
                                      o'zroziligini bildirishini tasdiqlaydi.• Bir dona chipta bilan faqat bir tomoshabin
                                      o'tkaziladi.• Chiptani tadbir yakuniga qadar saqlab turing, u iTicket korxonasi
                                      vakillari,tashkilotchilar, tadbir o'tkazilayotgan joy ma'muriyati, shuningdek
                                      huquq-tartibotidoralari hodimlari talablariga binoan taqdim etilishi kerak.• Chiptaning
                                      qaytarib olinishi uning old qismida belgisi mavjud bo’lganida vatashkilotchilar
                                      tomonidan iticket.uz saytida belgilangan qoidalarga muvofiq tarzdaamalga oshiriladi.•
                                      Tegishli belgi bo'lmagan hollarda chipta qaytarib olinmaydi.• Xaridor quyidagilarni o'z
                                      zimmasiga oladi: jamoat tartibi hamda odob-axloqqoidalariga rioya qilish; ommaviy tadbir
                                      tashkillashtirilayotgan obyekt mulkidanehtiyotkorlik bilan foydalanish;
                                      tashkillashtirilayotgan tadbir obyektining ichki tartib-qoidalariga amal qilish; tadbir
                                      tashkilotchilarining qonuniy talablariga, ma'muriyat vaichki ishlar organlari vakillari
                                      talablariga rioya qilish
                                  </p></div>
                              <div className="col-6  ">
                                  <h4>
                                      К СВЕДЕНИЮ ПОКУПАТЕЛЕЙ!
                                  </h4>
                                  <p>
                                      Приобретая билет, покупатель выражает своё согласие с условиямисоответствующей публичной
                                      оферты на сайте www.iticket.uz.• Одним билетом может пройти только один зритель.• Сохраняйте
                                      билет до окончания мероприятия, его необходимо предъявлятьпо первому требованию
                                      представителей компании iTicket, организатора,администрации места проведения, а также
                                      органов охраны правопорядка.• Возврат билетов осуществляется при наличии знака на лицевой
                                      сторонебилета, только в соответствии с правилами, установленными организатороммероприятия,
                                      опубликованными на сайте www.iticket.uz . При отсутствиисоответствующего знака, билет
                                      возврату не подлежит.• Покупатель билета обязуется: соблюдать общественный порядок
                                      иобщепринятые нормы поведения; бережно относиться к имуществу объектапроведения массового
                                      мероприятия; соблюдать порядок посещения объектапроведения массового мероприятия; выполнять
                                      законные требованияорганизаторов представителей администрации и органов внутренних дел

                                  </p></div>
                          </div>
                      </div>
                  </div>
              </div>
            </Modal>


        </div>
    );
};

export default OrdersDetail;