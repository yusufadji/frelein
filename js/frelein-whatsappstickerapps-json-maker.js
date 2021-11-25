function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
}

function output(inp) {
    document.getElementById('output').innerHTML = inp;
}

function makeJSON() {
    jsonObj = [];
    mainArray = {};
    mainArray.android_play_store_link = "";
    mainArray.ios_app_store_link = "";
    var fileObj = document.getElementById('files');
    if (fileObj.files.length > 30) {
        alert("You can only upload a maximum of 30 files");
    } else {
        for (var i = 0; i < fileObj.files.length; i++) {
            item = {};
            item["image_file"] = fileObj.files[i].name;
            item["emojis"] = [];
            item["emojis"].push("😄");
            item["emojis"].push("🙂");
            jsonObj.push(item);
        }
    }

    mainArray["sticker_packs"] = [];
    innerValue = {};
    innerValue["identifier"] = document.getElementById('identifier').value;
    innerValue["name"] = document.getElementById('name').value;
    innerValue["publisher"] = document.getElementById('publisher').value;
    innerValue["tray_image_file"] = document.getElementById('tray_image_file').value;
    innerValue["image_data_version"] = document.getElementById('image_data_version').value;
    innerValue["avoid_cache"] = document.getElementById('avoid_cache').checked;
    innerValue["publisher_email"] = document.getElementById('publisher_email').value;
    innerValue["publisher_website"] = document.getElementById('publisher_website').value;
    innerValue["privacy_policy_website"] = document.getElementById('privacy_policy_website').value;
    innerValue["license_agreement_website"] = document.getElementById('license_agreement_website').value;
    innerValue["animated_sticker_pack"] = document.getElementById('animated').checked;
    innerValue["stickers"] = [];
    innerValue["stickers"] = jsonObj;
    mainArray["sticker_packs"].push(innerValue);
    output(syntaxHighlight(JSON.stringify(mainArray, undefined, 4)));
}

function copyJSON() {
    const copyText = document.getElementById("output").textContent;
    if (copyText) {
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        M.toast({
            html: 'JSON Copied Successfully.'
        });
    } else {
        M.toast({
            html: 'You can not copy empty JSON'
        });
    }
}

function clearJSON() {
    document.getElementById("output").textContent = "";
}
