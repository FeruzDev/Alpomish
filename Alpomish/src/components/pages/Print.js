// import React from 'react';
// import { pdfFromReact } from "generate-pdf-from-react-html";
//
// const Print = () => {
//     return (
//         <div>
//             <h1>Example page</h1>

//             <button
//                 onClick={() =>
//                     pdfFromReact(".element-to-print-my", "Ticket", "p", true, false)
//                 }
//             >EXPORT</button>
//         </div>
//     );
// };
//
// export default Print;


import React from 'react';
import html2pdf from "html2pdf.js";
import Modal from "react-modal";


const Print = (props) => {
    const button = document.getElementById("download-button");

    function generatePDF() {
        // Choose the element that your content will be rendered to.
        const element = document.getElementById("invoice");
        // Choose the element and save the PDF for your user.
        html2pdf().from(element).save();
    }

    const customStyles = {
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            border: "none",
            background: "transparent",
            padding: "0",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    //
    // button.addEventListener("click", generatePDF);

    const convert = () => {

    }
    return (
        <div>
            <button id="download-button" onClick={generatePDF}>Download as PDF</button>

            <Modal
                isOpen={props.modalIsOpen}
                style={customStyles}
            >
                <div id="invoice">
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
                                    <h3>22 500.00 UZS</h3>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="col-md-12 d-flex align-items-center ">
                                    <div>
                                        <p className="mb-0">O'rin</p>
                                        <p className="mb-0">Место </p>
                                    </div>
                                    <h3>22 500.00 UZS</h3>
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
                                    <h4>22 500.00 UZS</h4>
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
            </Modal>
        </div>
    );
};

export default Print;