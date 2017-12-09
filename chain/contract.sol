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
        mapping(address => string) offers;
    }

    function SmartProject() {
        owner = msg.sender;
    }

    function getProjects() constant returns (Project) {
        for(uint i = 0; i<projects.length; i++) {

        }
    }

    function projectToJson(Project project) {
        return "{" +
            "id:" + project.id +
            ",callForTender:" + tenderToJson(project.callForTender) +
            ",description:" + project.description +
            ",deadline:" + project.deadline +
            ",affectedTo:" + toString(project.affectedTo) +
        "}";
    }

    function tenderToJson(CallForTender callForTender) {
        return "{" +
            "deadline:" + callForTender.deadline +
            ",offers:" +
        "}";
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
