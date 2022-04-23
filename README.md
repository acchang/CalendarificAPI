Calendarific!

This was a fun exercise and I learned a lot. I was also left with a lot of ambitions and questions.

Questions:
The list of free APIs here that we were given have three calendar APIs. 
https://github.com/public-apis/public-apis#calendar

They all include pay tier levels. Why? I'm assuming there is good money in calendar APIs.

I used Calendarific because Holiday API didn't seem to support JS, or their documentations wasn't written in a way I was familiar with. https://holidayapi.com/pricing

I'm not sure why I skipped Abstract. There's a lot of good stuff there, other APIs like an exchange rate converter. It would have been fun to play with. I think the site is poorly designed. I think I may have wound up on page that implied they had no free options. I think I might have been scared off by the way the parameters were set up too. https://app.abstractapi.com/dashboard

I saw `"date": "1/1/2020"` and thought I'd have to process that more. I read it wrong. Abstract also defaults to current day, which would have been helpful.

Ambitions:

Initially I wanted to give U.S. holidays as a default, and then maybe pull in a holiday for that day from another country at random. The data is there, but on a free account, throttling occurs at 1,000 requests per month. 

And I think the way things are set up with "country" as a required parameter, I would have to pull every country for each day, and that could use up a lot of those requests.

I've worked enough on this and am stopping now but I thought of other improvements I could make.

I could allow the user to pick by country. It would be relatively easy, a matter of switching the inputs, but creating a dropdown to correspond with `iso-3166 format` could be tiresome.
(EDIT: I did this, was easy.)

Also, defaulting to today and using `new Date()`.