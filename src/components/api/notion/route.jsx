import notion from './notion.jsx';

const array__allNewsData = [];

const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
});

response.results.map((news) => {
    const obj = {};
    obj.title = news.properties.Title.title[0].text.content;
    obj.category = news.properties.Category.select.name;
    obj.color = news.properties.Category.select.color;
    obj.date = news.properties.Date.date.start;
    array__allNewsData.push(obj);
});    

export default array__allNewsData;