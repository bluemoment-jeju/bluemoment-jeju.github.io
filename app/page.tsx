const NAVER_BOOKING = "https://m.place.naver.com/accommodation/1766550967/room";
const NAVER_MAP = "https://map.naver.com/p/entry/place/1766550967";
import RevealEffects from "./reveal-effects";

export const metadata = { title: "블루모먼트 | 제주 월령리 오션프론트 스테이", description: "제주 월령리 바다 바로 앞, 통창 너머 노을을 온전히 누리는 블루모먼트." };

const roomDetails = [
  { number:"201", title:"바다를 향한\n아늑한 프레임", capacity:"기준 2인 · 최대 4인", image:"/images/room201-01.jpg", gallery:["/images/room201-02.jpg","/images/room201-03.jpg","/images/room201-04.jpg"], copy:"높은 박공지붕과 전면 통창이 만드는 극적인 오션뷰. 둘만의 제주부터 작은 가족 여행까지 포근하게 품는 객실입니다.", points:["오션뷰 거실","침실 1 · 침대 1","주방 · 욕실 1"] },
  { number:"202", title:"함께 누리는\n넓은 오션 라운지", capacity:"기준 2인 · 최대 6인", image:"/images/room202-02.jpg", gallery:["/images/room202-01.jpg","/images/room202-03.jpg","/images/room202-04.jpg"], copy:"거실과 다이닝을 넉넉하게 분리한 밝은 공간. 가족이나 친구들과 같은 노을을 오래 나누기에 좋습니다.", points:["파노라마 오션뷰","침실 1 · 침대 1","넓은 다이닝 · 욕실 1"] }
];

export default function Home() {
  return <main>
    <RevealEffects />
    <header className="site-header"><a className="brand" href="#top" aria-label="블루모먼트 홈"><img src="/images/blue-moment-logo.svg" alt="Blue moment"/></a><nav aria-label="주요 메뉴"><a href="#story">공간</a><a href="#rooms">객실</a><a href="#amenities">시설</a><a href="#location">오시는 길</a></nav><a className="nav-book" href={NAVER_BOOKING} target="_blank" rel="noreferrer">네이버 예약</a></header>

    <section className="hero" id="top"><div className="hero-image" role="img" aria-label="블루모먼트 통창 너머로 펼쳐지는 제주 바다"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow">WOLLYEONG · JEJU</p><h1>바다가<br/>머무는 창</h1><p className="hero-text">바다와 가장 가까운 곳에서<br/>제주의 푸른 순간을 오래 바라보세요.</p><a className="primary-button" href={NAVER_BOOKING} target="_blank" rel="noreferrer">머물 날짜 확인하기 <span>↗</span></a></div><div className="hero-note"><span>33°22′ N</span><span>바다 바로 앞 · 월령리</span></div></section>

    <section className="intro" id="story"><p className="section-index">01 · THE VIEW</p><h2>여행의 목적지가<br/>창밖에 있습니다.</h2><div className="intro-grid"><p>현관을 열고 들어서는 순간, 벽 대신 바다가 맞이합니다. 낮에는 제주 특유의 푸른 물빛을, 해 질 무렵에는 월령리의 긴 노을을 소파에 앉아 누리는 곳.</p><div className="fact"><strong>0</strong><span>바다까지 필요한<br/>차량 이동 시간</span></div><div className="fact"><strong>24H</strong><span>건물 1층<br/>무인편의점</span></div></div><figure className="signage"><img src="/images/blue-moment-sign-enhanced.png" alt="블루모먼트 건물 외벽 공식 간판"/><figcaption><span>BLUE MOMENT SIGNATURE</span><p>월령리 바다 앞에서 만나는<br/>파란 점 하나의 작은 이정표</p></figcaption></figure></section>

    <section className="window-feature"><img src="/images/room201-01.jpg" alt="201호 전면 통창과 바다 전망"/><div className="window-caption"><p>FRAME THE SEA</p><h3>통창 한 폭에<br/>담긴 제주</h3><span>와인 한 잔과 노을이면 충분한 저녁</span></div></section>

    <section className="moments"><p className="section-index">THE BLUE MOMENT</p><div className="moment-row"><div><span>01</span><h3>파도 소리를 따라<br/>문밖의 작은 해변으로</h3><p>사람이 붐비는 해수욕장 대신, 펜션 바로 앞 작은 바닷가에서 아이와 가족, 연인이 우리만의 느린 물놀이를 즐겨보세요.</p></div><div><span>02</span><h3>해가 낮아지면<br/>통창 앞이 가장 좋은 자리</h3><p>월령리의 서쪽 하늘이 물드는 시간. 멀리 나갈 필요 없이 소파와 다이닝에서 노을을 끝까지 바라볼 수 있습니다.</p></div><div><span>03</span><h3>파란 바다 사이<br/>초록 잔디에서 한숨</h3><p>바다를 실컷 보고 돌아온 뒤에는 잔디밭에 앉아 쉬어가세요. 작은 휴식까지 숙소 안에서 완성됩니다.</p></div></div></section>

    <section className="rooms" id="rooms"><div className="section-heading"><div><p className="section-index">02 · ROOMS</p><h2>두 개의 푸른 방</h2></div><p>각기 다른 시선으로 바다를 담은<br/>201호와 202호를 만나보세요.</p></div>{roomDetails.map((room,index)=><article className="room-detail" key={room.number}><div className="room-visual"><img src={room.image} alt={`${room.number}호 대표 공간`}/><div className="room-number">{room.number}</div></div><div className="room-copy"><p className="room-label">ROOM {room.number}</p><h3>{room.title.split("\n").map((line,i)=><span key={i}>{line}<br/></span>)}</h3><p>{room.copy}</p><ul>{room.points.map(point=><li key={point}>{point}</li>)}</ul><p className="capacity">{room.capacity}</p><a href={NAVER_BOOKING} target="_blank" rel="noreferrer">객실 일정 확인 ↗</a></div><div className="mini-gallery">{room.gallery.map((image,i)=><img src={image} alt={`${room.number}호 내부 ${i+1}`} key={image}/>)}</div>{index===0&&<div className="room-divider"/>}</article>)}</section>

    <section className="amenities" id="amenities">
      <div className="amenities-header"><div><p className="section-index">03 · AMENITIES</p><h2>머무는 동안<br/>세심하게 준비한 것들</h2></div><div><p>눈에 보이는 아름다움뿐 아니라, 사용하는 순간의 편안함까지 생각했습니다. 객실마다 정돈된 편의와 어매니티를 만나보세요.</p><div className="amenity-categories"><span>객실 편의</span><span>오션 라이프</span><span>키친 &amp; 다이닝</span><span>배스 &amp; 케어</span></div></div></div>
      <div className="amenity-grid">
        <article className="amenity-card"><img src="/images/amenity-slippers.jpg" alt="블루모먼트의 푹신한 고급 쿠션 슬리퍼"/><div className="amenity-card-copy"><small>ROOM COMFORT</small><h3>발끝까지 편안하게</h3><p>객실마다 푹신한 고급 쿠션 슬리퍼 2족을 준비합니다.</p></div></article>
        <article className="amenity-card"><img src="/images/amenity-comfort.jpg" alt="객실의 긴 옷 행거와 제습기"/><div className="amenity-card-copy"><small>ROOM COMFORT</small><h3>쾌적한 옷과 공기</h3><p>긴 옷도 편히 걸 수 있는 행거와 제습기로 제주의 습한 날에도 산뜻하게.</p></div></article>
        <article className="amenity-card amenity-wide"><img src="/images/amenity-terrace.jpg" alt="바다가 보이는 블루모먼트 통창 테라스"/><div className="amenity-card-copy"><small>OCEAN LIFE</small><h3>바람 없이 누리는 바다</h3><p>바닷바람은 막고 풍경은 오롯이 담은 통창 테라스. 실내의 편안함으로 바깥의 바다를 누립니다.</p></div></article>
        <article className="amenity-card"><img src="/images/amenity-coffee.jpg" alt="매일 세척하고 살균하는 커피머신과 전기포트"/><div className="amenity-card-copy"><small>KITCHEN &amp; DINING</small><h3>매일 관리하는 커피 스테이션</h3><p>커피머신과 전기포트는 사장님이 매일 직접 세척하고 살균합니다.</p></div></article>
        <article className="amenity-card"><img src="/images/amenity-kitchenware.jpg" alt="깨끗하게 정돈된 조리도구와 식기류"/><div className="amenity-card-copy"><small>KITCHEN &amp; DINING</small><h3>바로 꺼내 쓰는 식기</h3><p>조리도구와 식기류도 매일 꼼꼼히 세척·살균해 별도 세척 없이 사용할 수 있습니다.</p></div></article>
        <article className="streaming-card"><div><small>ENTERTAINMENT</small><h3>각 객실 전용 계정으로<br/>좋아하는 작품을 마음껏</h3></div><div className="streaming-services"><span>NETFLIX</span><span>Disney+</span></div><p>넷플릭스와 디즈니+를 각 객실별 전용 계정으로 무제한 시청할 수 있습니다.</p></article>
        <article className="amenity-card"><img src="/images/amenity-bath.jpg" alt="호텔 수준의 샴푸 컨디셔너 바디워시"/><div className="amenity-card-copy"><small>BATH &amp; CARE</small><h3>직접 테스트한 배스 어메니티</h3><p>호텔 수준의 샴푸·컨디셔너·바디워시를 직접 테스트해 엄선하며 제품은 수시로 개선합니다.</p></div></article>
        <article className="amenity-card"><img src="/images/amenity-dental.jpg" alt="고급형 칫솔 치약 면봉 세트"/><div className="amenity-card-copy"><small>BATH &amp; CARE</small><h3>인원수에 맞춘 퍼스널 키트</h3><p>고급형 칫솔과 치약, 면봉 세트를 입실 인원에 맞춰 빠짐없이 준비합니다.</p></div></article>
        <article className="amenity-card amenity-wide"><img src="/images/amenity-dryer.jpg" alt="욕실의 고급 벽걸이 헤어드라이어"/><div className="amenity-card-copy"><small>BATH &amp; CARE</small><h3>단정하게 준비된 드라이어</h3><p>손쉽게 꺼내 쓰고 깔끔하게 정돈되는 고급 벽걸이 헤어드라이어를 갖췄습니다.</p></div></article>
      </div>
      <div className="base-amenities"><strong>기본 객실 비품</strong><div className="amenity-list"><span>냉장고</span><span>전자레인지</span><span>인덕션</span><span>에어컨</span><span>TV</span><span>Wi-Fi</span></div></div>
    </section>

    <section className="film-section"><div className="film-poster"><img src="/images/exterior-01.jpg" alt="블루모먼트 영상 미리보기 - 통창 오션뷰"/><div className="play-orbit"><span>▶</span></div><div className="film-status">OFFICIAL FILM · COMING SOON</div></div><div className="film-copy"><p className="section-index">04 · FILM</p><h2>사진 너머의<br/>파도와 빛</h2><p>외관에서 객실로, 다시 창밖의 바다로 이어지는 블루모먼트의 영상을 준비하고 있습니다. 공식 영상이 등록되면 이 자리에서 바로 재생됩니다.</p></div></section>

    <section className="store-section"><div className="store-overlay"/><div className="store-kicker">STAY UPSTAIRS · SHOP DOWNSTAIRS</div><div className="store-layout"><div className="store-content"><p className="section-index">05 · 24H STORE</p><h2>달시<br/>무인편의점</h2><p>블루모먼트 1층, 여행의 밤을 채우는 달시가 24시간 열려 있습니다. 시원한 음료와 과자, 아이스크림은 물론 주류와 안주까지 가까이에서 가볍게 즐겨보세요.</p><p className="store-highlight">그리고 달시에서만 누릴 수 있는 가장 근사한 한 끼. 단돈 몇천 원의 한강라면을 끓여 월령리 바다가 펼쳐진 오션뷰 테이블에 앉는 순간, 평범한 라면도 제주 여행의 특별한 장면이 됩니다.</p><div className="store-tags"><span>24 HOURS</span><span>OCEAN VIEW RAMEN</span><span>SNACK &amp; DRINK</span></div></div><div className="store-gallery persistent-media">{[2,3,5,6].map((number)=><figure key={number}><img src={`/images/dalsi-0${number}.jpg`} alt={`블루모먼트 1층 무인편의점 달시 ${number}`}/></figure>)}</div></div></section>

    <section className="location" id="location"><div className="location-map"><div className="map-water">JEJU SEA</div><div className="map-land"><div className="pin"><i/>BLUE MOMENT<small>월령1길 30-1</small></div></div></div><div className="location-copy"><p className="section-index">06 · LOCATION</p><h2>제주 서쪽,<br/>월령리 바다 앞</h2><address>제주특별자치도 제주시 한림읍<br/>월령1길 30-1, 201·202호</address><p>펜션 앞 주차 가능 · 네이버 지도에서<br/>‘블루모먼트’를 검색해 주세요.</p><div className="location-links"><a href={NAVER_MAP} target="_blank" rel="noreferrer">네이버 지도 ↗</a><a href="https://www.instagram.com/blue_moment.jeju" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section>

    <section className="booking-end"><p>YOUR BLUE MOMENT</p><h2>바다, 노을, 그리고<br/>우리만의 작은 휴가.</h2><a href={NAVER_BOOKING} target="_blank" rel="noreferrer">네이버에서 예약하기 ↗</a></section>
    <footer><a className="brand footer-brand" href="#top"><img src="/images/blue-moment-logo.svg" alt="Blue moment"/></a><div><p>제주 제주시 한림읍 월령1길 30-1</p><p>0507-1337-4362</p></div><p>© BLUE MOMENT JEJU</p></footer>
    <a className="mobile-book" href={NAVER_BOOKING} target="_blank" rel="noreferrer">네이버 예약 <span>↗</span></a>
  </main>;
}
