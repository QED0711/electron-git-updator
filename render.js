import { exec } from 'shelljs';


// HANDLE FILE DRAG

const handleFileDrag = () => {
    
    const drop = document.getElementById("document-holder");

    const files = document.getElementById("files");
    
    // Add drag and drop functionality to div
    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    
    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        for (let f of e.dataTransfer.files) {
            addFileToList(f.path)
        }
    })

    // append file/folder to the ul tag
    addFileToList = (file) => {
        const node = document.createElement("li")
        node.innerText = file
        files.appendChild(node);
    }

}

// GIT PROCESS

const gitProcess = (/*path, datetime*/) => {
    
    await exec(`git --git-dir=${path}.git add .`, {async: true});
    await exec(`git --git-dir=${path}.git commit -m "auto commit: ${datetime}"`, {async: true});
    await exec(`git --git-dir=${path}.git push -u origin master`, {async: true});
    
}


handleFileDrag();



setInterval(gitProcess, 20000)




