$(document).ready(function() {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (const user of tweets) {
    $('#tweets-container').prepend(createTweetElement(user)); 
  }
}

const createTweetElement = function(tweet) {
  const timeTweeted = new Date(tweet.created_at)
  let $tweet = `<article class="tweet">
  <header>
    <div class="name"><img src='${tweet.user.avatars}'> ${tweet.user.name}</div>
    <div class="handle">${tweet.user.handle}</div>
  </header>
  <div>${tweet.content.text}</div>
  <div class="border"></div>
  <footer>
    <div>${moment(timeTweeted).startOf('minute').fromNow()}</div>
    <div><img src="images/flags.png"><img src="images/retweet.png"><img src="images/like.png"></div>
  </footer>
</article>`

return $tweet;
}

$(function() {
  const $button = $('#tweetbutt');
  $button.on('click', function(event) {
    event.preventDefault();
      const data = $('textarea').serialize();
      $.post('/tweets', data) 
    }
  })
})



loadTweets = () => {
  $.getJSON('/tweets', data)
    return data;
}
const arr = loadTweets();

renderTweets(arr)


});

