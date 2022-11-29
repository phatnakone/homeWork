const objPeolpe = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "user",
        password: "user"


    }
]

function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    for (i = 0; i < objPeolpe.length; i++) {
        if (username == objPeolpe[i].username && password == objPeolpe[i].password) {
            if (username == "admin" && password == "admin") {
                alert("Hello Admin");
                return false;
            }

            else if (username == "user" && password == "user") {
                alert("Hello User");
                return false;
            }

        }
    }

    alert("Failed please try again");


}