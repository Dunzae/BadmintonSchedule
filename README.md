# Badminton Game Schedule  
2023년 3월 24일 ~ 2023년 8월 31일
<a href="https://dunzae2.netlify.app">사이트 클릭</a>

## 개요  
리액트를 배우고 처음으로 진행한 프로젝트입니다.  
만들게 된 계기는 배드민턴 클럽을 주말마다 다니면서 가끔 구 대회에 참여하게 되었습니다.
이때 스포넷이라는 사이트를 통해 각 경기 시간표를 일일히 검색해서 들어가야 하는 불편함이 있었습니다.  
배드민턴 클럽에는 연세가 높으신 분들도 많아, 그런 검색들을 어려워 하시는 분들이 많았습니다.  
이러한 문제를 해결하고자 클럽별로 한번에 시간표를 만들어 나눠드리려고 만든 프로젝트입니다.

## 메뉴
홈 - 기본 설명, 개발 주기, 개발자  
대회 검색 - 스포넷에 있는 대회를 검색하고 이를 보여줍니다.  
클럽 검색 - 선택된 대회에 있는 클럽 전부를 보여주거나, 검색된 이름에 해당하는 클럽을 나열합니다.  
팀 검색 - 클럽 내에서 출전하는 팀들의 리스트를 보여주며, 시간표에 반영할 수 있습니다. (팀 이름으로 검색할 수 있습니다.)  
시간표 - 선택된 팀들을 통해 최종 시간표를 보여줍니다. (날짜별로 보여줍니다.)  

## 설명  
대회 검색을 통해 현재 진행중이거나 예정중인 대회를 선택합니다.  
선택한 대회에 대진표가 존재할 경우, 클럽과 클럽에 속한 팀들을 선택합니다.  
이때 선택된 팀들의 시간표가 시간표란을 통해 출력되며, 이미지로 다운받을 수 있습니다.

## 사진
<p>이 사진은 실제 시간표를 구성한 후에 다운받은 사진입니다.</p>
<img src="https://user-images.githubusercontent.com/137369425/257323726-0126a6cd-9750-4ee4-8a9d-c19667684731.png" />  

<p>이 사진은 대회 검색을 위한 리스트입니다.  
선택 가능하며, 만약 대진표가 존재하지 않는 경우 시간표란이 비어있게 됩니다. (버그)</p>
<img src="https://private-user-images.githubusercontent.com/183177837/385126728-e637f4ad-64cb-429d-adf7-07f885f2b8db.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEzODI0MDYsIm5iZiI6MTczMTM4MjEwNiwicGF0aCI6Ii8xODMxNzc4MzcvMzg1MTI2NzI4LWU2MzdmNGFkLTY0Y2ItNDI5ZC1hZGY3LTA3Zjg4NWYyYjhkYi5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExMlQwMzI4MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNDczZWM2NGFiMWE0MzQ4OWE5YjlhZjQ4MDVmYTA0ODNkYWFmZGZjNWU1NGNiMjk4OTkwMTcxMjRhMzhkZDk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ChOWb68t6IFhCwi1-c3qfnBuOE0QwvqM0QL8FwiwO2s" width="500" height="600" />  

<p>가장 고민을 많이했던 페이지네이션 기능입니다.
리스트 목록을 주어진 단위로 쪼갠 후에 각 배열에 묶음으로 넣어 페이지네이션을 구현했습니다.</p>
<img src="https://private-user-images.githubusercontent.com/183177837/385127569-fd0446ab-4a17-4f57-b756-3652172b83b1.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEzODIwNjUsIm5iZiI6MTczMTM4MTc2NSwicGF0aCI6Ii8xODMxNzc4MzcvMzg1MTI3NTY5LWZkMDQ0NmFiLTRhMTctNGY1Ny1iNzU2LTM2NTIxNzJiODNiMS5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExMlQwMzIyNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZDU0NGE3MDdmZmFkMTFiZjkxMDYyNjJmYzkyNjdlYWNmNTdlMTg3YmMxMjYwMDk0Y2ZjZDI1NmQzY2NmZTU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KdzjQwvMCKrQRt1c8FjvsMqRio21jytlwEx6BgVnYBY"  />  
<img src="https://github.com/user-attachments/assets/f1267e4a-669e-4078-a8c9-81d7db649005" />


## 프로젝트를 진행하면서 아쉬웠던 점  
처음 프로젝트를 만들다 보니 예외처리를 잘 하지 못했습니다.  
예를 들어 대회 중 대진표가 존재하지 않는 경우는 대회 검색에 출력하지 않는다거나, 경고문을 좀 더 사용자 친화적으로 보여줬으면  
어땠을까 싶습니다. 또한 대회나 클럽, 팀을 선택하지 않았을 때 시간표란을 눌렀을 경우 경고문을 출력하도록 설정했으면 좋았을 것 같습니다.
