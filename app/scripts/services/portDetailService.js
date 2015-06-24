'use strict';

angular.module('garrettApp')
  .service('PortDetailService', function () {
    var portfolio = [
      {
        urlTitle: 'Inrule_Development',
        image: '../images/inrule.png',
        description: 'A site done for Adage Technologies developing the front end, using responsive design techniques, CSS preprocessing and jQuery.',
        details: {
          title: 'Inrule Development',
          image: '../images/headers/inrule-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: 'images/details/inrule_detail.png',
            imageTwo: 'images/details/inrule_detail2.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
          },
        show: false
      },
      {
        urlTitle: 'Northshore_Development',
        image: '../images/northshore.png',
        description: 'Northshore Health Systems\' corporate website, partcipated in the redesign and development of the responsive framework',
        details: {
          title: 'Northshore Development',
          image: '../images/headers/northshore-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: 'images/details/northshore_full.jpg',
            imageTwo: 'images/details/ns_shot.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Community_Care_Partners',
        image: '../images/community_care.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        details: {
          title: 'Community Care Partners',
          image: '../images/headers/community-care-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'TeamMate_Redesign',
        image: '../images/teammate.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet debitis eligendi consequuntur maiores enim doloremque iste fugiat delectus quisquam',
        details: {
          title: 'TeamMate Redesign',
          image: '../images/headers/teammate-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'RedHawk_Casino',
        image: '../images/redhawkcasino_03.jpg',
        description: 'An exciting redesign of RedHawk Casino\'s main web page. This project was done in a bid to win this client for Adage Technologies.',
        details: {
          title: 'RedHawk Casino',
          image: '../images/headers/redhawk-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '../images/details/redhawkcasino_head.jpg',
            imageTwo: '../images/details/redhawkcasino_footer.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_10_Things',
        image: '../images/tenthingsLg.jpg',
        description: 'Designed for Groupon, Inc. as a city guide that served as a vehicle to sell deals.',
        details: {
          title: 'Groupon 10 Things',
          image: '../images/headers/tenthings-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: '//placehold.it/600x600/f3f3f3/cccccc.png',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Grand',
        image: '../images/grandcentralLg.jpg',
        description: 'The purpose of this design was to provide a visual context for the presentation of Editorial ideas about new site content.',
        details: {
          title: 'Groupon Grand Central',
          image: '../images/headers/grand-central-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: 'images/details/grandcentral_detail.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Getaways',
        image: '../images/merchgetaways2.jpg',
        largeView: '../images/details/redhawkcasino_Lg.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quod, obcaecati doloremque nobis. Nihil porro odit libero, temporibus unde ipsum culpa veritatis, magni voluptatibus, impedit, necessitatibus ratione nisi inventore est.',
        details: {
          title: 'Groupon Getaways',
          image: '../images/headers/merchant-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: 'images/details/getaways_detail.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'MainStreet_App',
        image: '../images/MS_Home.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus numquam dolorem quos repellat nisi sed iste. Rem unde iste quibusdam itaque. Dolorem nesciunt vero quis deserunt ea, consectetur eligendi magnam.',
        details: {
          title: 'MainStreet App',
          image: '../images/headers/mainstreet-header.jpg',
          largeView: '../images/details/redhawkcasino_Lg.jpg',
          detailViews: {
            imageOne: 'images/details/MS_detail.jpg',
            imageTwo: '//placehold.it/600x600/f3f3f3/cccccc.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      }
    ];

    this.get = function (title) {
      for(var i = 0; i < portfolio.length; i++) {
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
