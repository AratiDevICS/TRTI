 @extends('frontend.header')
 @section('content') 
 <main class="wrapper_box">
  <section class="stiff">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <a class="arrow_box arrow_box1" href="https://etribevalidity.mahaonline.gov.in" target="_blank">
            <h5 class="arrow_part">आदि प्रमाण प्रणाली </h5>
          </a>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <a class="arrow_box arrow_box2" href="https://trtionline.org.in/tambition" target="_blank">
            <h5 class="arrow_part">उद्योजकता कौशल्य विकास प्रकल्प</h5>
          </a>
        </div>
        <!-- <div class="col-md-3 col-sm-6  col-xs-6"><a class="arrow_box arrow_box3"><h5 class="arrow_part">वन हक्क कायदा 2006</h5></a></div><div class="col-md-3 col-sm-6 col-xs-6"><a class="arrow_box arrow_box4"><h5 class="arrow_part">वन हक्क प्लस</h5></a></div> -->
      </div>
    </div>
  </section>
  <section class="service-part">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="serviceBox serviceBox_green demo">
            <h4 class="title">चालू घडामोडी</h4>
            <div class="service-icon">
              <!-- <i class="fa fa-newspaper-o"></i> -->
              <i class="fa-regular fa-newspaper"></i>
            </div>
            <ul class="description content-1" id=""></ul>
            <div class="Footer_service">
              <a href="/index.php/news-list" class="btn btn-blue">अधिक पहा</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="serviceBox serviceBox_blue demo">
            <h3 class="title">कार्यक्रम</h3>
            <div class="service-icon">
              <!-- <i class="fa fa-calendar"></i> -->
              <i class="fa-solid fa-calendar-days"></i>
            </div>
            <ul class="description content-1" id=""></ul>
            <div class="Footer_service">
              <a href="/index.php/event-list" class="btn btn-blue">अधिक पहा</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="serviceBox serviceBox_yellow demo">
            <h4 class="title">घोषणा </h4>
            <div class="service-icon">
              <i class="fa fa-bullhorn"></i>
            </div>
            <ul class="description content-1" id="">
              <li>
                <p>
                  <span>
                    <a class="home-announcementtitle" href="/index.php/announcement-details?anID=1">29 डिसेंबर 2018 पासून पुणे सीव्हीसीला आयएसओ 9001: 2015 प्रमाणित केले गेले आहे.</a>: </span>
                  <!-- <span>29 डिसेंबर 2018 पासून पुणे सीव्हीसीला आयएसओ 9001: 2015 प्रमाणित केले गेले आहे. : </span> -->
                </p>
                <p class="read-more">21 Jan 2019</p>
              </li>
            </ul>
            <div class="Footer_service">
              <a href="/index.php/announcement-list" class="btn btn-blue">अधिक पहा</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="gallary-part">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="news-slider" class="owl-carousel gallery">
            <div class="post-slide box">
              <img src="{{ url('homepage/images/madhiya_shiku_ya_1_20190808_1390827334.jpg') }}" />
              <div class="box-content">
                <h3 class="title">''माडियाशिकूया" पुस्तकप्रकाशनसमारंभ</h3>
              </div>
              <ul class="icon">
                <li>
                  <a href="/index.php/photo-gallery?glyCatID=28">
                    <i class="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="post-slide box">
              <img src="{{ url('homepage/images/mahatribes_7_20190603_1631058138.jpg') }}" />
              <div class="box-content">
                <h3 class="title">महात्म्य</h3>
              </div>
              <ul class="icon">
                <li>
                  <a href="/index.php/photo-gallery?glyCatID=26">
                    <i class="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="post-slide box">
              <img src="{{ url('homepage/images/iso_certification_for_cvc_pune_8_20190121_1357255457.jpg') }}" />
              <div class="box-content">
                <h3 class="title">सीव्हीसी पुणे साठी आयएसओ प्रमाणपत्र</h3>
              </div>
              <ul class="icon">
                <li>
                  <a href="/index.php/photo-gallery?glyCatID=23">
                    <i class="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="post-slide box">
              <img src="{{ url('homepage/images/tribal_festival_5_20190121_1077242843.jpg') }}" />
              <div class="box-content">
                <h3 class="title">आदिवासी उत्सव</h3>
              </div>
              <ul class="icon">
                <li>
                  <a href="/index.php/photo-gallery?glyCatID=21">
                    <i class="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
@endsection