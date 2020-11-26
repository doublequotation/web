// var raw = '{\n    "username": "ashtyn372@gmail.com",\n    "name": "/"\n}';

var requestOptions = {
    method: "POST",
    body: JSON.stringify({ username: "ashtyn372@gmail.com", name: "/" }),
    redirect: "follow",
};
fetch("http://127.0.0.1:3000/get", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        result.split("\n").forEach((f, num) => {
            // const d = JSON.parse(f);
            if (num != 0) {
                let p = document.createElement("p");
                p.innerText = f;
                p.onclick = async (p) => {
                    var reqOptions = {
                        method: "POST",
                        body: JSON.stringify({
                            username: "ashtyn372@gmail.com",
                            name: p.target.innerText,
                        }),
                        redirect: "follow",
                    };
                    const req = await fetch(
                        "http://127.0.0.1:3000/get",
                        reqOptions
                    ).then((req) => req.text());
                    document.getElementById("download").href =
                        "data:text/plain;charset=utf-8," +
                        encodeURIComponent(req);
                    document.getElementById(
                        "download"
                    ).download = p.target.innerText.split("/")[
                        p.target.innerText.split("/").length - 1
                    ];
                    document.getElementById("download").click();
                };
                document.getElementById("files").appendChild(p);
            }
        });
    })
    .catch((error) => console.log("error", error));
