const { Client } = require('@notionhq/client');
 
const notion = new Client({
  auth: process.env.NOTION_SECRET
});

export default notion;