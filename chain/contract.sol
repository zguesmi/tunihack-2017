pragma solidity ^0.4.0;
import "github.com/Arachnid/solidity-stringutils/strings.sol";
contract SmartProject {

    address owner;
    using strings for *;

    Project[] projects;

    struct Project {
        string id;
        string data;
    }

    function SmartProject() {
        owner = msg.sender;
        Project memory project1 = Project({id:"project1", data:'"{callForTender":{"deadline":"2017-11-11T12:15","offers":[{"sender":"s1","description":"First offer"},{"sender":"s2","description":"Second offer"},{"sender":"s3","description":"3rd offer"}]},"description":"Second project","deadline":"2017-12-30T00:00","affectedTo":"5","state":"Affected","expenses":"255DT Papiers, 4000DT Materiels"},'});
        Project memory project2 = Project({id:"project1", data:'"{callForTender":{"deadline":"2018-01-11T12:15","offers":[{"sender":"s1","description":"First offer"},{"sender":"s2","description":"Second offer"},{"sender":"s3","description":"3rd offer"}]},"description":"Third project","deadline":"2018-04-14T00:00","affectedTo":"5","state":"Open","expenses":"300DT Equipements, 10000DT Ordinateurs"},'});
        Project memory project3 = Project({id:"project1", data:'"{callForTender":{"deadline":"2017-09-11T12:15","offers":[{"sender":"s1","description":"First offer"},{"sender":"s2","description":"Second offer"},{"sender":"s3","description":"3rd offer"}]},"description":"Fourth project","deadline":"2018-04-14T00:00","affectedTo":"5","state":"Affected","expenses":"300DT Equipements, 10000DT Ordinateurs"}'});
        Project memory project4 = Project({id:"project1", data:'"{callForTender":{"deadline":"2016-11-11T12:15","offers":[{"sender":"s1","description":"First offer"},{"sender":"s2","description":"Second offer"},{"sender":"s3","description":"3rd offer"}]},"description":"First project","deadline":"2017-11-30T00:00","affectedTo":"2","state":"Finished","expenses":"1000DT Ciment, 5000DT Materiels"},'});
        projects.push(project1);
        projects.push(project2);
        projects.push(project3);
        projects.push(project4);
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

    function getProject(string id) returns (string) {
        for(uint i=0; i<projects.length; i++) {
            if (keccak256(id) == keccak256(projects[i].id)) {
                return projectToJson(projects[i]);
            }
        }
    }

    function updateProject(string id, string data) {
        for(uint i=0; i<projects.length; i++) {
            if (keccak256(id) == keccak256(projects[i].id)) {
                projects[i].data = data;
            }
        }
    }

    function projectToJson(Project project) private returns(string) {
        string memory projectId = project.id;
        string memory str1 = "{".toSlice().concat("id:".toSlice());
        string memory str2 = str1.toSlice().concat(project.id.toSlice());
        string memory str3 = str2.toSlice().concat(",data:".toSlice());
        string memory str4 = str3.toSlice().concat(project.data.toSlice());
        return str4;
    }

    /*function getOffers(string id) returns (string) {
        for(uint i=0; i<projects.length; i++) {
            if (keccak256(id) == keccak256(projects[i].id)) {
                return projects[i].callForTender.offers;
            }
        }
    }

    function addOffer(string id, string offers) {
        for(uint i=0; i<projects.length; i++) {
            if (keccak256(id) == keccak256(projects[i].id)) {
                projects[i].callForTender.offers = offers;
            }
        }
    }*/


    /*function stackTooDeepHelp(Project project, string pr, string str1) private returns (string){
        string memory proDead = project.deadline;
        string memory projectCall = tenderToJson(project.callForTender);
        string memory str2 = str1.toSlice().concat( projectCall.toSlice());
        string memory str3 = str2.toSlice().concat(",description:".toSlice());
        string memory str4 = str3.toSlice().concat(pr.toSlice());
        string memory str5 = str4.toSlice().concat(",deadline:".toSlice());
        string memory str6 = str5.toSlice().concat( proDead.toSlice());
        string memory str7 = str6.toSlice().concat(",affectedTo:".toSlice());
        string memory str8 = str7.toSlice().concat( toString(project.affectedTo).toSlice());
        return str8.toSlice().concat("}".toSlice());

    }

    function toString(address x) private returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }*/


}
