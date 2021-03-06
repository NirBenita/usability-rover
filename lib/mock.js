"use strict";

var startMsg = {
    "type": "message",
    "channel": "C2CU76YDB",
    "user": "U2CTXB49J",
    "text": "@ur start",
    "ts": "1479141248.000002",
    "team": "T2CSKBAE7",
    "event": "ambient"
};

var messages = {
    name: 'mock flow',
    messages: [{
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "This product is terrible! No it's not ^_^",
        "ts": "1479117541.000034",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "Testing a product",
        "ts": "1479141266.000005",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "Let's see how this goes...",
        "ts": "1479141271.000006",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }] };

var endMsg = {
    "type": "message",
    "channel": "C2CU76YDB",
    "user": "U2CTXB49J",
    "text": "@ur end",
    "ts": "1479117841.000034",
    "team": "T2CSKBAE7",
    "event": "ambient"
};

module.exports = {
    startMsg: startMsg,
    messages: messages,
    endMsg: endMsg
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2NrLmpzIl0sIm5hbWVzIjpbInN0YXJ0TXNnIiwibWVzc2FnZXMiLCJuYW1lIiwiZW5kTXNnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXO0FBQ2IsWUFBUSxTQURLO0FBRWIsZUFBVyxXQUZFO0FBR2IsWUFBUSxXQUhLO0FBSWIsWUFBUSxXQUpLO0FBS2IsVUFBTSxtQkFMTztBQU1iLFlBQVEsV0FOSztBQU9iLGFBQVM7QUFQSSxDQUFqQjs7QUFVQSxJQUFNQyxXQUFXO0FBQ2JDLFVBQU0sV0FETztBQUViRCxjQUFVLENBQUM7QUFDWCxnQkFBUSxTQURHO0FBRVgsbUJBQVcsV0FGQTtBQUdYLGdCQUFRLFdBSEc7QUFJWCxnQkFBUSwyQ0FKRztBQUtYLGNBQU0sbUJBTEs7QUFNWCxnQkFBUSxXQU5HO0FBT1gsaUJBQVM7QUFQRSxLQUFELEVBUVA7QUFDQyxnQkFBUSxTQURUO0FBRUMsbUJBQVcsV0FGWjtBQUdDLGdCQUFRLFdBSFQ7QUFJQyxnQkFBUSxtQkFKVDtBQUtDLGNBQU0sbUJBTFA7QUFNQyxnQkFBUSxXQU5UO0FBT0MsaUJBQVM7QUFQVixLQVJPLEVBZ0JQO0FBQ0MsZ0JBQVEsU0FEVDtBQUVDLG1CQUFXLFdBRlo7QUFHQyxnQkFBUSxXQUhUO0FBSUMsZ0JBQVEsNEJBSlQ7QUFLQyxjQUFNLG1CQUxQO0FBTUMsZ0JBQVEsV0FOVDtBQU9DLGlCQUFTO0FBUFYsS0FoQk8sQ0FGRyxFQUFqQjs7QUE0QkEsSUFBTUUsU0FBUztBQUNYLFlBQVEsU0FERztBQUVYLGVBQVcsV0FGQTtBQUdYLFlBQVEsV0FIRztBQUlYLFlBQVEsU0FKRztBQUtYLFVBQU0sbUJBTEs7QUFNWCxZQUFRLFdBTkc7QUFPWCxhQUFTO0FBUEUsQ0FBZjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNiTCxzQkFEYTtBQUViQyxzQkFGYTtBQUdiRTtBQUhhLENBQWpCIiwiZmlsZSI6Im1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGFydE1zZyA9IHtcbiAgICBcInR5cGVcIjogXCJtZXNzYWdlXCIsXG4gICAgXCJjaGFubmVsXCI6IFwiQzJDVTc2WURCXCIsXG4gICAgXCJ1c2VyXCI6IFwiVTJDVFhCNDlKXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQHVyIHN0YXJ0XCIsXG4gICAgXCJ0c1wiOiBcIjE0NzkxNDEyNDguMDAwMDAyXCIsXG4gICAgXCJ0ZWFtXCI6IFwiVDJDU0tCQUU3XCIsXG4gICAgXCJldmVudFwiOiBcImFtYmllbnRcIlxufTtcblxuY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgbmFtZTogJ21vY2sgZmxvdycsXG4gICAgbWVzc2FnZXM6IFt7XG4gICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuICAgIFwiY2hhbm5lbFwiOiBcIkMyQ1U3NllEQlwiLFxuICAgIFwidXNlclwiOiBcIlUyQ1RYQjQ5SlwiLFxuICAgIFwidGV4dFwiOiBcIlRoaXMgcHJvZHVjdCBpcyB0ZXJyaWJsZSEgTm8gaXQncyBub3QgXl9eXCIsXG4gICAgXCJ0c1wiOiBcIjE0NzkxMTc1NDEuMDAwMDM0XCIsXG4gICAgXCJ0ZWFtXCI6IFwiVDJDU0tCQUU3XCIsXG4gICAgXCJldmVudFwiOiBcImFtYmllbnRcIlxuICAgIH0sIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICBcImNoYW5uZWxcIjogXCJDMkNVNzZZREJcIixcbiAgICAgICAgXCJ1c2VyXCI6IFwiVTJDVFhCNDlKXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlRlc3RpbmcgYSBwcm9kdWN0XCIsXG4gICAgICAgIFwidHNcIjogXCIxNDc5MTQxMjY2LjAwMDAwNVwiLFxuICAgICAgICBcInRlYW1cIjogXCJUMkNTS0JBRTdcIixcbiAgICAgICAgXCJldmVudFwiOiBcImFtYmllbnRcIlxuICAgIH0sIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICBcImNoYW5uZWxcIjogXCJDMkNVNzZZREJcIixcbiAgICAgICAgXCJ1c2VyXCI6IFwiVTJDVFhCNDlKXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkxldCdzIHNlZSBob3cgdGhpcyBnb2VzLi4uXCIsXG4gICAgICAgIFwidHNcIjogXCIxNDc5MTQxMjcxLjAwMDAwNlwiLFxuICAgICAgICBcInRlYW1cIjogXCJUMkNTS0JBRTdcIixcbiAgICAgICAgXCJldmVudFwiOiBcImFtYmllbnRcIlxuICAgIH1dfTtcblxuY29uc3QgZW5kTXNnID0ge1xuICAgIFwidHlwZVwiOiBcIm1lc3NhZ2VcIixcbiAgICBcImNoYW5uZWxcIjogXCJDMkNVNzZZREJcIixcbiAgICBcInVzZXJcIjogXCJVMkNUWEI0OUpcIixcbiAgICBcInRleHRcIjogXCJAdXIgZW5kXCIsXG4gICAgXCJ0c1wiOiBcIjE0NzkxMTc4NDEuMDAwMDM0XCIsXG4gICAgXCJ0ZWFtXCI6IFwiVDJDU0tCQUU3XCIsXG4gICAgXCJldmVudFwiOiBcImFtYmllbnRcIlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RhcnRNc2csXG4gICAgbWVzc2FnZXMsXG4gICAgZW5kTXNnXG59XG4iXX0=