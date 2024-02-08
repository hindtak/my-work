// In Node.js, const fs = require('fs'); imports the built-in fs module, which stands for "file system"
const fs = require('fs');
// It includes methods for manipulating file paths,
const path = require('path');

// to read the file
function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) =>{
            if(err) {
                reject('File not found');
            }else{
                resolve(data);
            }
        })
    })

}
// to write in a file
// Example
function writeFileAsync(path,content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if(err) {
                reject('Error writing to file: ' + {err, message});
            }else {
                resolve('write operation successful');
            }
        })
    })

};
// Example here

function processFilesp(paths, manipulate) {
    paths.forEach(filePath => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file', err);
                return;
            }

            // Perform manipulation here if needed
            const manipulatedData = manipulate ? manipulate(data) : data;

            fs.writeFile(filePath, manipulatedData, 'utf8', (err) => {
                if (err) {
                    console.log('Error writing to file', err);
                    return;
                }
                console.log('Successfully Modified', filePath);
            });
        });
    });
}
// Example usage:
const paths = ['file1.txt', 'file2.txt'];
processFilesp(paths, (data) => {
    // Example manipulation function
    return data.toUpperCase(); // Convert text to uppercase
});

// Example manipulation function: adding a timestamp
function addTimestamp(content) {
    const timestamp = new Date().toISOString();
    return `${timestamp}\n${content}`;
}
// the async function
async function processFiles(filePaths, manipulationFunction) {
    try{
        const data = await fs.promises.readFile(filePath, err );
        const data2 = await fs.promises.writeFile(path, content)
    }
    catch (err) {
        console.log('Error processinf files', err);
    }
}
// challenge day 7
async function fetchUserData() {
    try {
        // API / APPLACATION PROGRAMMING INTERFACE
        // fetch data from the api
        const response = await fetch('https://dummyjson.com/users');
        // check if the response is successdful
        // ok its a boolean prop to check it true or false
        if(!response.ok) {
            console.log("Failed to fetch user data");
        }
        const userData = await response.json();
        return userData;

    } catch (err) {
        // handel erros
        console.error('Eroor fetching user data:',)

    }
}
/**
The fetch method in JavaScript is used to make asynchronous HTTP requests to fetch resources 
(such as JSON data, HTML, images, etc.) 
from a server. 
t is a modern replacement for the older XMLHttpRequest (XHR) object. */