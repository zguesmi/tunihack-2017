pragma solidity ^0.4.0;
import "github.com/Arachnid/solidity-stringutils/strings.sol";
contract SmartProject {

    address owner;
    string greeting;
    using strings for *;

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
        /*mapping(address => string) offers;*/
    }

    function SmartProject() {
        owner = msg.sender;
        CallForTender memory callForTender = CallForTender({deadline:"zied dead"});
        Project memory project = Project({id:"project1", callForTender:callForTender,
            description:"description test", deadline: "2015", affectedTo:address(0)});
        projects.push(project);
    }

    function getProjects() constant returns (string) {
        string memory str = "[" ;
        for(uint i = 0; i<projects.length; i++) {
            str = str.toSlice().concat(projectToJson(projects[i]).toSlice());
            str = str.toSlice().concat(",".toSlice());
        }
        str = str.toSlice().concat("]".toSlice());
        return str;
    }

    function  projectToJson(Project project) private returns(string) {
        string memory projectId = project.id;
        string memory str = "{".toSlice().concat("id:".toSlice());
        string memory str0 = str.toSlice().concat(project.id.toSlice());
        string memory str1 = str0.toSlice().concat(",callForTender:".toSlice());
        string memory pr =    project.description ;
        stackTooDeepHelp(project, pr, str1);
    }

    function stackTooDeepHelp(Project project, string pr, string str1) private {
        string memory proDead = project.deadline;
        string memory projectCall = tenderToJson(project.callForTender);
        string memory str2 = str1.toSlice().concat( projectCall.toSlice());
        string memory str3 = str2.toSlice().concat(",description:".toSlice());
        string memory str4 = str3.toSlice().concat(pr.toSlice());
        string memory str5 = str4.toSlice().concat(",deadline:".toSlice());
        string memory str6 = str5.toSlice().concat( proDead.toSlice());
        string memory str7 = str6.toSlice().concat(",affectedTo:".toSlice());
        string memory str8 = str7.toSlice().concat( toString(project.affectedTo).toSlice());
        string memory str9 = str8.toSlice().concat("}".toSlice());

    }

    function tenderToJson(CallForTender callForTender) private returns(string){
        return "{".toSlice().concat("deadline:".toSlice())
            .toSlice().concat(callForTender.deadline.toSlice()).toSlice()
            .concat(",offers:".toSlice()).toSlice().concat("}".toSlice());
    }

    function toString(address x) private returns (string) {
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


}
