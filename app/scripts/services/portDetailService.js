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
          overview: 'InRule was designed by an outside contract firm and brought to Adage Technologies to complete the responsive development and CMS implementation. As the site was developed I advised the company on some design alterations that would better suit their site as I developed the responsive framework. This site was developed using Foundation and Sass and is fully responsive.',
          solution: 'InRule was a particularly challenging project, being that it was designed by an outside firm. Some of the design choices made were not in the best interest of making the site responsive, however I was able to guide the company to fixing some of those decisions. In the end I used Foundation 5 to develop the responsive side and implented Sass to keep the css maintainable, modular and organized.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
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
          overview: 'As a member of the Adage Design and Development team I participated in the redesign and development of Northshore Health System\'s new website. This site is built using Foundation 4 as well as incorporating Sass and a backend CMS built on EpiServer.',
          solution: 'Northshore\'s website it very large and complex, making it responsive was definitely no small feat. As part of the team, I made great use of Foundation to do the heavy lifting in making the design responsive. We also had the task of combining the new with the old. Northshore of course already had a site and did not want to start from scratch in terms of the codebase so combining Sass and responsive design with the old code was tricky but using a css preprocessor and a responsive framework made it manageable.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
        },
        show: false
      },
      {
        urlTitle: 'Community_Care_Partners',
        image: '../images/gallery/community_care.png',
        description: 'Designed and developed as a mini site showcasing Northshore\'s partnership with community health care centers.',
        details: {
          title: 'Community Care Partners',
          siteUrl: 'http://www.northshore.org/community-care-partners/',
          image: '../images/headers/community-care-header.jpg',
          detailViews: {
            imageOne: '../images/details/community-care1.png',
            imageTwo: '../images/details/community-care2.png'
          },
          overview: 'Being part of the design and development team to work on Northshore\'s main site. When they came to Adage for a mini site featuring their partnership with community health centers I was handed the project. Northshore needed a site that tied in with their existing aesthetic and complemented their site but also showed off that this was a seperate endeavor.',
          solution: 'As I took ownership of the project I incorporated many of their existing site elements, repurposing them for their partner site. This approach allowed me to keep the unity and cohesion between the two sites while concentrating on the best plan for the design of this project. When it came time for development I made great use of Sass and Foundation which coincided with the technology that the main Northshore site was already built upon. I also incorporated functionality from their old site, giving it a style update to match the partner site aesthetic.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
        },
        show: false
      },
      {
        urlTitle: 'Cleveland_Orchestra',
        image: '../images/gallery/cleveland.jpg',
        description: 'Responsive redesign of the Cleveland Orchestra website, designed with themes to showcase their two major showtime seasons',
        details: {
          title: 'Cleveland Orchestra',
          siteUrl: 'http://www.clevelandorchestra.com/',
          image: '../images/headers/cleveland-header.jpg',
          detailViews: {
            imageOne: '../images/details/cleveland-detail.jpg'
          },
          overview: 'Though it had been recently redesigned and relaunched by another firm, The Cleveland Orchestra wasn’t happy with the design or performance of its website. The look and feel of the site was old and stale. The purchase path for tickets was treacherous, and more often than not, spurred calls to the box office from angry and confused patrons. Adage built the Orchestra a responsive website that allows users to browse rich content and buy tickets for performances at the group’s Severance Hall home and its summer events at Blossom Music Festival.',
          solution: 'When designing Cleveland\'s site, our UX designer did a great job in laying the foundation for how the user experience would flow. Working from the rough wireframes of user interaction, I began to work on the aesthetic and how it would complement the user experience. Cleveland has two venues and two seasons and needed a site that would change its color palette according to which venue is selected. I made use of Sass mixins, functions and variables to provide different styles for all of the pages depending on which venue is chosen.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
        },
        show: false
      },
      {
        urlTitle: 'Boston_Symphony_Orchestra',
        image: '../images/gallery/bso.jpg',
        description: 'A web app designed and developed for the Boston Symphony Orchestra to allow academics to search and query a database of current and past works based on a number of parameters such as composer or genre.',
        details: {
          title: 'BSO Archives',
          siteUrl: 'http://archives.bso.org/',
          image: '../images/headers/bso-header.jpg',
          detailViews: {
            imageOne: '../images/details/bso-detail.jpg'
          },
          overview: 'The Boston Symphony Orchestra has millions of archived data on composers, artists, performances, musical works and more. They devised a system to keep track of this information and make it searchable by academics and anyone else who had interest in it. Disatisfied with the way it functioned and the glacial pace at which it returned results they consulted Adage to design and build them a new archive. This was designed to be a search engine app for the Symphony\'s database It features downloadble pdf\'s and sortable results by anything the user can conceivably want to sort by.',
          solution: 'BSO has a great deal of info related to their performances. As such they needed something that enabled their users to search based on a variety of criteria. I designed this to incorporate tabs allowing each search to be contained in its own unit according the the requirements given by the BSO. Expanding upon the UX designers wireframes I gave the search engine aesthetic appeal that aids the user in navigating and finding what they are searching for.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
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
          overview: 'Overall the Red Hawk Casino site is outdated both visually and in the way it is constructed. As a designer at Adage we sometimes did designs to showcase our vision for how we could help a client. My goal with this design was to clean up and modernize the look and feel of the home page. Using a clean color palette while retaining the red that is their brand color, I redesigned the Red Hawk site to be more visually appealing while also offering a better user experience to patrons of the casino.',
          solution: 'Designing Redhawk, I wanted to make them look modern and more elegant. Their current site, in my opinion, makes their casino look cheap and second rate. In order to do this I first decided that their current site makes far too much use of red. While it seemed to be a brand color, its use on their site makes the experience difficult. Being such a powerful color I decided to use it sparingly to accent points of interest and draw the users attention to important elements. Overall, I added a great deal of white space and large lush photography of their establishment to really convey a sense of luxury and high quality that to me is missing from their current site.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
        },
        show: false
      },
      {
        urlTitle: 'Groupon_10_Things',
        image: '../images/gallery/tenthingsLg.jpg',
        description: 'Designed for Groupon, Inc. as a city guide that served as a vehicle to sell deals. This guide would feature areas of interest based on a common theme of ten things to do in that city.',
        details: {
          title: 'Groupon 10 Things',
          siteUrl: '',
          image: '../images/headers/tenthings-header.jpg',
          detailViews: {
            imageOne: '../images/details/merchtenthings2.jpg'
          },
          overview: 'As a designer for Groupon I designed a wide variety of interesting projects. This projects was aimed at fufilling the Groupon corporate mission. The company has always maintained that it wanted to be a curator of local commerce and so to that end we were tasked with providing the look and feel of a city guide. The idea of this was to provide ten things in various categories such as romantic restaurants or spanish eateries or best beauty parlors. These would then be tied in with the Groupon brand of humor and paired with deals that corresponded to the theme. Addtionally the user could also favorite certain places and they would show up in their user profile as a list of places they might like to visit.',
          solution: 'For this project I wanted to do something unique with the design. Something that would delight users and that could be expanded upon in future iterations. I created the tiles as a representation of the locations so that they all felt seperate but unified. Using the circlular shapes was another convention that I employed to great effect and was based on the shapes and markers you find in navigation and geolocation tools. Combining all of these elements creates a very interesting and unique user experience that culminates with the user following the lined path from place to place. This is meant to echo the gps directions users are used to now and give a sense of navigating the user to new experiences.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
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
          overview: 'Along the lines of Groupon\'s mission to be a currator of local commerce. Grand Central allowed the user to upvoate or downvote a certain establishment and see what other users had either up or down voted. Depending on the number of upvotes or downvotes, the establishment would recive a percentage rating and ranked among the queries when a user searched for a particular term that that establishment would be a part of. Groupon needed a place to host this information which was to be termed Grand Central, this is a design concept executed for presentation of what the finished product could be.',
          solution: 'For Grand Central, the design needed a clear and precise way for users to identify the main feature of the concept, the voting system. To make sure that this feature stood out I created a side tab for it and made it one of the larger elements on each tile. Also, the use of green and blue and large Helvetica numbers allows it to stand out and again, be easily identified by users looking for that information.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
        },
        show: false
      },
      {
        urlTitle: 'Groupon_Main_Street',
        image: '../images/gallery/merchgetaways2.jpg',
        description: 'A design for Groupon, Inc to show how the company could expand into more than just offering deals.',
        details: {
          title: 'Groupon Main Street',
          siteUrl: '',
          image: '../images/headers/merchant-header.jpg',
          detailViews: {
            imageOne: 'images/details/getaways_detail.jpg'
          },
          overview: 'Yelp is a one stop shop for reviews, user opinions, establishment info, such as hours, and more. Groupon has always maintained that they wanted to be more than just a deal site. They wanted to curate local commerce. To not only provide people discounts and incentives to patronize local businesses but to also discover interesting and off the beaten path experiences for their customers. To this end I designed a concept called MainStreet which featured reviews and directions among other things.',
          solution: 'This design required a great deal of planning and concept work. I wanted to make the design unique and compelling, which presented a challenge considering the amount of data that needed to be displayed. In all of my designs I do my best to veer away from the "boxy" look and opt for more asymetrical layouts. For Mainstreet I put the most pertinent info at the top and arranged it so the user would follow from left to right in normal fashion. to offset this I then positioned the establishment data slightly kicked out to the left to draw attention to it. I made significant use of tabbed modules to keep information and like items together, grouped and organized which allows the user to easliy navigate and find what they need without feeling overwhelmed.',
          tech: {
              style: '../images/tools/sass.png',
              markup:'../images/tools/html5.png',
              script: '../images/tools/jquery.png',
              rwd: '../images/tools/foundation.png'
          }
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
