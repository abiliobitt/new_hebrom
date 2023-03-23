import React from 'react';
import TextSection from './components/general/textSection';
import Navbar from './components/header';
import HomeBanner from './components/homeBanner';

function App() {
  return (
    <div className="App">
      <Navbar isMobile={false} />
      <HomeBanner />
      <TextSection
        imageUrl='http://via.placeholder.com/600x300'
        title='Regularização de imóveis'
        p='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus autem mollitia porro, odit cumque? Nemo eligendi tempore inventore cum vitae voluptas mollitia cumque laborum. Quae delectus deserunt exercitationem et quasi quos maxime dignissimos porro? Debitis laborum, dolores cum ratione unde quod accusamus eos veniam ut odit, impedit ullam, facilis corrupti fuga asperiores quo. Doloribus deleniti illum numquam atque eos, alias molestias maiores, ducimus tempora placeat porro esse laborum. Harum error delectus id nesciunt cumque facere minus incidunt sint saepe asperiores dolorem molestias aspernatur impedit vitae, modi, reiciendis non praesentium possimus. Cum recusandae quasi labore eaque? Commodi sapiente similique dolorem voluptatum mollitia obcaecati laudantium nisi explicabo, facilis iure ex impedit. Consequatur beatae hic perspiciatis atque, sint fuga. Veniam, fugit animi?'
        variant='-secondary'
        imgPosition='right'
        textLink='Veja mais'
        link='#'
      />
      <TextSection
        imageUrl='http://via.placeholder.com/600x300'
        title='Lançamentos'
        p='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus autem mollitia porro, odit cumque? Nemo eligendi tempore inventore cum vitae voluptas mollitia cumque laborum. Quae delectus deserunt exercitationem et quasi quos maxime dignissimos porro? Debitis laborum, dolores cum ratione unde quod accusamus eos veniam ut odit, impedit ullam, facilis corrupti fuga asperiores quo. Doloribus deleniti illum numquam atque eos, alias molestias maiores, ducimus tempora placeat porro esse laborum. Harum error delectus id nesciunt cumque facere minus incidunt sint saepe asperiores dolorem molestias aspernatur impedit vitae, modi, reiciendis non praesentium possimus. Cum recusandae quasi labore eaque? Commodi sapiente similique dolorem voluptatum mollitia obcaecati laudantium nisi explicabo, facilis iure ex impedit. Consequatur beatae hic perspiciatis atque, sint fuga. Veniam, fugit animi?'
        variant='-primary'
        imgPosition='left'
        textLink='Veja mais'
        link='#'
      />
      
      <TextSection
        imageUrl='http://via.placeholder.com/600x300'
        title='Anuncie seu imóvel'
        p='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus autem mollitia porro, odit cumque? Nemo eligendi tempore inventore cum vitae voluptas mollitia cumque laborum. Quae delectus deserunt exercitationem et quasi quos maxime dignissimos porro? Debitis laborum, dolores cum ratione unde quod accusamus eos veniam ut odit, impedit ullam, facilis corrupti fuga asperiores quo. Doloribus deleniti illum numquam atque eos, alias molestias maiores, ducimus tempora placeat porro esse laborum. Harum error delectus id nesciunt cumque facere minus incidunt sint saepe asperiores dolorem molestias aspernatur impedit vitae, modi, reiciendis non praesentium possimus. Cum recusandae quasi labore eaque? Commodi sapiente similique dolorem voluptatum mollitia obcaecati laudantium nisi explicabo, facilis iure ex impedit. Consequatur beatae hic perspiciatis atque, sint fuga. Veniam, fugit animi?'
        variant='-secondary'
        imgPosition='right'
        textLink='Veja mais'
        link='#'
      />
    </div>
  );
}

export default App;
