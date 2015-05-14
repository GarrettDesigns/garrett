'use strict';

angular.module('garrettApp')
  .service('PortDetailService', function () {
    var portfolio = [
      {
        urlTitle: 'RedHawk_Casino',
        image: '../images/redhawkcasino_03.jpg',
        description: 'An exciting redesign of RedHawk Casino\'s main web page. This project was done in a bid to win this client for Adage Technologies.',
        details: {
          title: 'RedHawk Casino',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '../images/details/redhawkcasino_footer.jpg',
            imageTwo: '../images/details/redhawkcasino_footer.jpg',
            imageThree: '../images/details/redhawkcasino_footer.jpg'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_10_Things',
        image: '../images/tenthingsLg.jpg',
        description: 'Designed for Groupon, Inc. as a city guide that served as a vehicle to sell deals.',
        details: {
          title: 'Groupon 10 Things',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Grand',
        image: '../images/grandcentralLg.jpg',
        description: 'The purpose of this design was to provide a visual context for the presentation of Editorial ideas about new site content.',
        details: {
          title: 'Groupon Grand Central',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Inrule_Development',
        image: '../images/inrule.png',
        description: 'A site done for Adage Technologies developing the front end, using responsive design techniques, CSS preprocessing and jQuery.',
        details: {
          title: 'Inrule Development',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Northshore_Development',
        image: '../images/northshore.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur pariatur, tenetur repellat voluptas? Nobis, id rerum ullam doloremque maiores, architecto? Illo nulla accusamus aspernatur officiis necessitatibus facilis facere praesentium.',
        details: {
          title: 'Northshore Development',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Getaways',
        title: 'Groupon Getaways',
        image: '../images/merchgetaways2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quod, obcaecati doloremque nobis. Nihil porro odit libero, temporibus unde ipsum culpa veritatis, magni voluptatibus, impedit, necessitatibus ratione nisi inventore est.',
        details: {
          title: 'RedHawk Casino',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'MainStreet_App',
        image: '../images/MS_Home.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus numquam dolorem quos repellat nisi sed iste. Rem unde iste quibusdam itaque. Dolorem nesciunt vero quis deserunt ea, consectetur eligendi magnam.',
        details: {
          title: 'MainStreet App',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'TeamMate_Redesign',
        image: '../images/teammate.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet debitis eligendi consequuntur maiores enim doloremque iste fugiat delectus quisquam modi nemo omnis repellat neque rem soluta, aspernatur, atque recusandae?',
        details: {
          title: 'TeamMate Redesign',
          image: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Project_Title',
        image: 'http://dummyimage.com/1200x1200/4d494d/686a82.gif&text=placeholder+image',
        detailViews: {
          imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
          imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png',
          imageThree: '//placehold.it/600x600/f3f3f3/cccccc.png'
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor est obcaecati maxime animi distinctio quia quo recusandae magni earum incidunt, quibusdam repellat nobis. Minus delectus corporis culpa eos accusamus.',
        details: {
          title: 'Project Title',
          image: '../images/details/redhawkcasino_Lg.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      }
    ];

    this.get = function (title) {
      for(var i = 0; i < portfolio.length; i++) {
        console.log(i);
        if(portfolio[i].urlTitle === title) {
          var portItem = portfolio[i];
          return portItem;
        }
      }
    };

    this.portList = function () {
      return portfolio;
    };
  });
