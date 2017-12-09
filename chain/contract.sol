pragma solidity ^0.4.0;
contract SmartProject {

    address owner;
    string greeting;

    Project[] projects;

    struct Project {
        string id;
        CallForTender callForTender;
        string description;
        string deadline;
        address affectedTo;
    }

    struct CallForTender {
        string deadline;
        Offer[] offers;
    }

    struct Offer {
        address sender;
        string description;
    }

    function SmartProject() {
        owner = msg.sender;
    }

    function getProjects() constant returns (Project) {
        for(uint i = 0; i<projects.length; i++) {}
    }

    function projectToJson(Project project) returns (string) {
        string memory a = strConcat("{id:", project.id, ",callForTender:", tenderToJson(project.callForTender), ",description:");
        string memory b = strConcat(project.description, ",deadline:", project.deadline, ",affectedTo:", toString(project.affectedTo));
        return strConcat(a, b, "}", "", "");
    }

    function tenderToJson(CallForTender callForTender) returns (string) {
        return strConcat("{deadline:", callForTender.deadline, ",offers:", offersToJson(callForTender.offers), "}");
    }

    function offersToJson(Offer[] offers) returns (string) {
        string memory str = "[";
        for(uint i = 0; i<offers.length-1; i++) {
            string memory offer = strConcat("{sender:", toString(offers[i].sender), ",description:", offers[i].description, "},");
            str = strConcat(str, offer, "", "", "");
        }
        string memory lastOffer =  strConcat("{sender:", toString(offers[offers.length].sender), ", description:", offers[offers.length].description, "}]");
        return strConcat(str, lastOffer, "", "", "");
    }

    function strConcat(string _a, string _b, string _c, string _d, string _e) internal returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        bytes memory _bd = bytes(_d);
        bytes memory _be = bytes(_e);
        string memory abcde = new string(_ba.length + _bb.length + _bc.length + _bd.length + _be.length);
        bytes memory babcde = bytes(abcde);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        for (i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
        for (i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
        for (i = 0; i < _be.length; i++) babcde[k++] = _be[i];
        return string(babcde);
    }

    function toString(address x) returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }

    function getProject() {}

    function addProject() {}

    function getOffers() {}

    function getOffer() {}

    function addOffer() {}

    function sayHello() constant returns (string) {
        return "Hello world";
    }

    function good() {

    }
}
