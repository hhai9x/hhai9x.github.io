const kSMessageName = "name";
const kSMessageData = "data";
const kReturnCode = "returnCode";
const SMessageName = {
	getUserId: "getUserId",
	showToast: "showToast",
	closeApp: "closeApp",
	setNavigationBarLeftButton: "setNavigationBarLeftButton",
	setNavigationBarTitle: "setNavigationBarTitle",
	setNavigationBarColor: "setNavigationBarColor",
    forwardMessage: "forwardMessage"
};
const SNavigationBackButtonType = {
	close: "close",
	back: "back"
};

function sendMessageToNativeApp(messageData) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.webToNativeAppComunication) {
        window.webkit.messageHandlers.webToNativeAppComunication.postMessage(messageData);
    }
}

function receiveMessageFromNativeApp(messageData) {
    var decodedData = window.atob(messageData);
    var dictionaryData = JSON.parse(decodedData);
    let messageName = dictionaryData[kSMessageName];
    switch(messageName) {
        case SMessageName.getUserId: {
            handleLoginResponse(dictionaryData);
            break;
        }
        default:
            break;
    }
}

function getUserId() {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.getUserId
    });
}

function forwardMessage(message) {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.forwardMessage,
        [kSMessageData]: message
    });
}

function showToast(toastMessage) {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.showToast,
        [kSMessageData]: toastMessage
    });
}

function closeApp() {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.closeApp
    });
}

function setNavigationBarLeftButton(buttonType) {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.setNavigationBarLeftButton,
        [kSMessageData]: buttonType
    });
}

function setNavigationBarTitle(title) {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.setNavigationBarTitle,
        [kSMessageData]: title
    });
}

function setNavigationBarColor(color) {
    sendMessageToNativeApp({
        [kSMessageName]: SMessageName.setNavigationBarColor,
        [kSMessageData]: color
    });
}