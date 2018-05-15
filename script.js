"use strict";
$(document).ready(() => {
    $.get('https://www.reddit.com/r/pitbulls_in_partyhats/.json').then((data) => {
        console.log(data);
        for (let i = 0; i < 10; i++) {
            let title = data.data.children[i].data.title;
            let img = data.data.children[i].data.thumbnail;
            let link = data.data.children[i].data.permalink;
            let auth = data.data.children[i].data.author;
            let url = "https://reddit.com" + link;
            $(".postContainer").append(`
                <div class="post">
                <h2>${title}<h2>
                <img src="${img}">
                <p>The author of this post is: ${auth}</p>
                <a href="${url}">Here is the link to the page!</a>
                </div>
            `)
        }
    });







});