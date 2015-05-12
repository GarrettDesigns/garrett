'use strict'

angular.module('garrettApp')
  .service('PortDetailService', function () {
    var portfolio = [
      {
        itemIndex: '0',
        portName: 'RedHawk_Casino',
        title: 'RedHawk Casino',
        image: '../images/redhawkcasino_03.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus rerum, facere. Odit suscipit saepe quas nisi dolore tenetur, repellendus numquam autem vitae ducimus, aspernatur, architecto debitis animi possimus itaque laudantium.',
        show: false
      },
      {
        itemIndex: '1',
        portName: 'Groupon_10_Things',
        title: 'Groupon 10 Things',
        image: '../images/tenthingsLg.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consectetur, sunt iste cupiditate dolor recusandae officia assumenda, non et officiis perspiciatis! Dolor officiis veritatis, sunt suscipit non ullam asperiores facilis!',
        show: false
      },
      {
        itemIndex: '2',
        portName: 'Groupon_Grand',
        title: 'Groupon Grand Central',
        image: '../images/grandcentralLg.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis cupiditate ratione repellat, aut praesentium dolorem ut ipsam quo temporibus veniam aliquid ad possimus sed unde, perferendis magni velit beatae.',
        show: false
      },
      {
        itemIndex: '3',
        portName: 'Inrule_Development',
        title: 'Inrule Development',
        image: '../images/inrule.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, maiores assumenda dolores omnis quisquam aut ipsum accusantium mollitia eum neque tempore ut sunt nobis nostrum maxime nesciunt odit porro quos.',
        show: false
      },
      {
        itemIndex: '4',
        portName: 'Northshore_Development',
        title: 'Northshore Development',
        image: '../images/northshore.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur pariatur, tenetur repellat voluptas? Nobis, id rerum ullam doloremque maiores, architecto? Illo nulla accusamus aspernatur officiis necessitatibus facilis facere praesentium.',
        show: false
      },
      {
        itemIndex: '5',
        portName: 'Groupon_Getaways',
        title: 'Groupon Getaways',
        image: '../images/merchgetaways2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quod, obcaecati doloremque nobis. Nihil porro odit libero, temporibus unde ipsum culpa veritatis, magni voluptatibus, impedit, necessitatibus ratione nisi inventore est.',
        show: false
      },
      {
        itemIndex: '6',
        portName: 'MainStreet_App',
        title: 'MainStreet App',
        image: '../images/MS_Home.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus numquam dolorem quos repellat nisi sed iste. Rem unde iste quibusdam itaque. Dolorem nesciunt vero quis deserunt ea, consectetur eligendi magnam.',
        show: false
      },
      {
        itemIndex: '7',
        portName: 'TeamMate_Redesign',
        title: 'TeamMate Redesign',
        image: '../images/teammate.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique amet debitis eligendi consequuntur maiores enim doloremque iste fugiat delectus quisquam modi nemo omnis repellat neque rem soluta, aspernatur, atque recusandae?',
        show: false
      },
      {
        itemIndex: '8',
        portName: 'Project_Title',
        title: 'Project Title',
        image: 'http://dummyimage.com/1200x1200/4d494d/686a82.gif&text=placeholder+image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor est obcaecati maxime animi distinctio quia quo recusandae magni earum incidunt, quibusdam repellat nobis. Minus delectus corporis culpa eos accusamus.',
        show: false
      }
    ];

    this.get = function (portName) {
      for (i in portfolio) {
        if (portfolio[i].portName == portName) {
          portfolio.splice(i, 1);
        }
      }
    }

    this.portList = function () {
      return portfolio;
    }
  });
