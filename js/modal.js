/* MODAL */

var modalData =
{
    skinny: {
      title: 'Skinny Skinz Artist Website',
      detail: 'This website is the result of a collaboration with an Danish Rapper called Skinny Skinz. He needed to improve his online presence so I builded a plateform in HTML, CSS and Javascript that fits his identity and where some of the content is Fetch via the Wordpress API.',
      link: 'http://davidale.design/skinnySite/',
      media: ["media/skinny1.png","media/skinny2.png","media/skinny3.png"]
    },
    translator: {
      title: 'Translator Web Page',
      detail: 'I designed and coded a website in HTML,CSS & JS, for my own translation freelancing business while I am travelling abroad.',
      link: "https://digitartpzm.dk/translator_webpage/root.html",
      media: ["media/translator1.png","media/translator2.png","media/translator3.png"]
    },
    game: {
      title: 'Western Family Game',
      detail: 'I coded a whole game that you can play in the browser for a school project. It is coded in HTML,CSS and some advanced programming in Javascript.',
      link: 'http://www.powur.com/with/42',
      media: ["media/game1.png","media/game2.png","media/game3.png"]
    },
    uprooted: {
      title: 'Uprooted Video',
      detail: 'This project showcase my video skills. A short montage on our experience on being expats. The video was edited in Premiere Pro.',
       link: 'https://www.youtube.com/watch?v=-2ki4vJhVHo',
      media: ["media/uprooted1.png","media/uprooted2.png","media/uprooted3.png"]
    },

  };

$("#uprooted, #game, #translator, #skinny").click(function (iconObject) {
    $('.modal').modal('toggle');
    let iconId = iconObject.target.id;
    document.querySelector(".modal-title").textContent = modalData[iconId].title;
    document.querySelector(".modal-description").textContent = modalData[iconId].detail;
    document.querySelector("#point-wb").href = modalData[iconId].link;
     document.querySelector("#first-carousel").src = modalData[iconId].media[0];
    document.querySelector("#second-carousel").src = modalData[iconId].media[1];
    document.querySelector("#third-carousel").src = modalData[iconId].media[2];


});
