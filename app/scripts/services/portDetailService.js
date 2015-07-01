'use strict';

angular.module('garrettApp')
  .service('PortDetailService', function () {
    var portfolio = [
      {
        urlTitle: 'Inrule_Development',
        image: '../images/gallery/inrule.png',
        description: 'A site done for Adage Technologies developing the front end, using responsive design techniques, CSS preprocessing and jQuery.',
        details: {
          title: 'Inrule Development',
          siteUrl: 'http://www.inrule.com',
          image: '../images/headers/inrule-header.jpg',
          detailViews: {
            imageOne: 'images/details/inrule_detail.png',
            imageTwo: 'images/details/inrule_detail2.png'
          },
          overview: 'InRule was designed by an outside contract firm and brought to Adage Technologies to complete the responsive development and CMS implementation. As the site was developed I advised the company on some design alterations that would better suit their site as I developed the responsive framework. This site was developed using Foundation and Sass and is fully responsive.'
          },
        show: false
      },
      {
        urlTitle: 'Northshore_Development',
        image: '../images/gallery/northshore.png',
        description: 'Northshore Health Systems\' corporate website, I partcipated in the redesign and development of the site and responsive framework.',
        details: {
          title: 'Northshore Development',
          siteUrl: 'http://www.northshore.org',
          image: '../images/headers/northshore-header.jpg',
          detailViews: {
            imageOne: 'images/details/northshore_full.jpg',
            imageTwo: 'images/details/ns_shot.jpg'
          },
          overview: 'As a member of the Adage Design and Development team I participated in the redesign and development of Northshore Health System\'s new website. This site is built using Foundation 4 as well as incorporating Sass and a backend CMS built on EpiServer.'
        },
        show: false
      },
      {
        urlTitle: 'Community_Care_Partners',
        image: '../images/gallery/community_care.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        details: {
          title: 'Community Care Partners',
          siteUrl: 'http://www.northshore.org/community-care-partners/',
          image: '../images/headers/community-care-header.jpg',
          detailViews: {
            imageOne: '../images/details/community-care1.png',
            imageTwo: '../images/details/community-care2.png'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Cleveland Orchestra',
        image: '../images/gallery/cleveland.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet debitis eligendi consequuntur maiores enim doloremque iste fugiat delectus quisquam',
        details: {
          title: 'Cleveland Orchestra',
          siteUrl: 'http://www.clevelandorchestra.com/',
          image: '../images/headers/cleveland-header.jpg',
          detailViews: {
            imageOne: 'http://placehold.it/600x600'
          },
          overview: 'Though it had been recently redesigned and relaunched by another firm, The Cleveland Orchestra wasn’t happy with the design or performance of its website. The look and feel of the site was old and stale. The purchase path for tickets was treacherous, and more often than not, spurred calls to the box office from angry and confused patrons. Adage built the Orchestra a responsive website that allows users to browse rich content and buy tickets for performances at the group’s Severance Hall home and its summer events at Blossom Music Festival.'
        },
        show: false
      },
      {
        urlTitle: 'boston-symphony',
        image: '../images/gallery/bso.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus numquam dolorem quos repellat nisi sed iste. Rem unde iste quibusdam itaque. Dolorem nesciunt vero quis deserunt ea, consectetur eligendi magnam.',
        details: {
          title: 'BSO Archives',
          siteUrl: 'http://archives.bso.org/',
          image: '../images/headers/bso-header.jpg',
          detailViews: {
            imageOne: '../images/details/bso-detail.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'RedHawk_Casino',
        image: '../images/gallery/redhawkcasino_03.jpg',
        description: 'An exciting redesign of RedHawk Casino\'s main web page. This project was done in a bid to win this client for Adage Technologies.',
        details: {
          title: 'RedHawk Casino',
          siteUrl: '',
          image: '../images/headers/redhawk-header.jpg',
          detailViews: {
            imageOne: '../images/details/redhawkcasino_Lg.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_10_Things',
        image: '../images/gallery/tenthingsLg.jpg',
        description: 'Designed for Groupon, Inc. as a city guide that served as a vehicle to sell deals.',
        details: {
          title: 'Groupon 10 Things',
          siteUrl: '',
          image: '../images/headers/tenthings-header.jpg',
          detailViews: {
            imageOne: '../images/details/merchtenthings2.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Grand',
        image: '../images/gallery/grandcentralLg.jpg',
        description: 'The purpose of this design was to provide a visual context for the presentation of Editorial ideas about new site content.',
        details: {
          title: 'Groupon Grand Central',
          siteUrl: '',
          image: '../images/headers/grand-central-header.jpg',
          detailViews: {
            imageOne: 'images/details/grandcentral.jpg'
          },
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore quibusdam quia nulla possimus, nemo expedita officiis nihil architecto dolorem soluta assumenda totam ad odio sit, vel, sint et ratione.'
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Getaways',
        image: '../images/gallery/merchgetaways2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quod, obcaecati doloremque nobis. Nihil porro odit libero, temporibus unde ipsum culpa veritatis, magni voluptatibus, impedit, necessitatibus ratione nisi inventore est.',
        details: {
          title: 'Groupon Getaways',
          siteUrl: '',
          image: '../images/headers/merchant-header.jpg',
          detailViews: {
            imageOne: 'images/details/getaways_detail.jpg'
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
