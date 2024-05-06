"use server"
import fs from "fs";
import path from "path";

const createNewPost = (formData: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
}) => {
    const fileName = `${formData.title.split(' ').join('-')}-${new Date().getTime()}.md`;
    const content = [
        "---",
        [
            `title: "${formData.title}"`,
            `subtitle: "${formData.subTitle}"`,
            `date: "${formData.date}"`,
        ].join("\n"),
        "---",
        `"${formData.description}"`
    ].join("\n");

    const filePath = path.join(process.cwd(), "assets", fileName);

    fs.writeFile(filePath, content, (res) => {
        console.log('File is written successfully');
    })
};

export default createNewPost;
