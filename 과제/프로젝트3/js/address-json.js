
async function init() {
  var data = {
    // 여기에 JSON 데이터를 넣습니다.
    "gyeongnammarketList": {
      "header": {
          "resultCode": "00",
          "resultMsg": "NORMAL_CODE"
      },
      "body": {
          "items": {
              "item": [
                  {
                      "entid": 2063060,
                      "area": "합천군",
                      "title": "삼가시장",
                      "address": "삼가면 일부5길 1",
                      "openday": "2․7일장",
                      "tel": "-"
                  },
                  {
                      "entid": 2063059,
                      "area": "합천군",
                      "title": "초계시장",
                      "address": "초계면 초계중앙로 61",
                      "openday": "5/10일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063058,
                      "area": "합천군",
                      "title": "(주)합천시장",
                      "address": "합천읍 합천리 473-1",
                      "openday": "3/8일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063057,
                      "area": "거창군",
                      "title": "가조공설시장",
                      "address": "가조면 가조가야로 1110-13",
                      "openday": "4/9일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063056,
                      "area": "거창군",
                      "title": "거창시장",
                      "address": "거창읍 중앙로 140",
                      "openday": "일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063055,
                      "area": "의령군",
                      "title": "의령시장",
                      "address": "의령읍 의병로20길 19-2",
                      "openday": "3/8일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063054,
                      "area": "양산시",
                      "title": "양산남부시장상가",
                      "address": "장터3길 7",
                      "openday": "1/6일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063053,
                      "area": "양산시",
                      "title": "남부시장",
                      "address": "중앙로 133",
                      "openday": "1/6일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063052,
                      "area": "거제시",
                      "title": "고현종합시장",
                      "address": "거제중앙로 1883-2",
                      "openday": "5/10일장",
                      "tel": " "
                  },
                  {
                      "entid": 2063051,
                      "area": "통영시",
                      "title": "중앙전통시장",
                      "address": "중앙시장1길 14-16",
                      "openday": "2/7일장",
                      "tel": " "
                  }
              ]
          },
          "numOfRows": 10,
          "pageNo": 1,
          "totalCount": 78
      }
  }

  };

  var addresses = data.gyeongnammarketList.body.items.item.map(function(market) {
      return market.area + " " + market.address;
  });

  console.log(addresses); // ["합천군 삼가면 일부5길 1", "합천군 초계면 초계중앙로 61", ...]
  //var addresses = ["합천군 삼가면 일부5길 1", "창원시 진해구 웅동로 57번가길 7(마천동)","김해시 진례면 송현로 6-1"];
  const result = document.querySelector('#result');
  var string = "";
  for(i=0; i<addresses.length; i++) {
    var query = encodeURI(addresses[i]);
    const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=${query}`, {
      headers:  {
                  "Authorization": "KakaoAK ade06750b94c8bbd14fd3a4053a7c360"
                }
    });
    const data = await response.json();
    const locations = data.documents;
    console.log(locations);
    if(locations.length>0)
      string += display(locations[0]);
  }
  result.innerHTML = string;
}

function display(location) {
  return `<table><tr><th>주소</th><td>${location.address.address_name}</td></tr>
            <tr><th>경도</th><td>${location.address.x}</td></tr>
            <tr><th>위도</th><td>${location.address.y}</td></tr>
            </table>`;
}

init();
