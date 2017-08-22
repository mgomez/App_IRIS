var connectionStatus;
var networkState;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", online, false);

    networkState = navigator.connection.type;

    if (navigator.notification) {
        window.alert = function (message) {
            navigator.notification.alert(
                message,
                null,
                "IRIS",
                'OK'
            );
        };
    }
}

function online() {
    connectionStatus = true;
}

function onOffline() {
    connectionStatus = false;
    alert("Se perdio la conexion a internet.");
}