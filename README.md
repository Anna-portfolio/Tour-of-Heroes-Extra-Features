The official <a href="https://angular.io/tutorial">"Tour of Heroes" Angular tutorial app</a> with additional features (based on the <a href="https://www.skillsoft.com/channel/angular-f3619a61-1944-11e7-b488-c198130a9b04?technologyandversion=84199&expertiselevel=84192">Skillsoft courses</a> and my own ideas).

Extra Features include:
- Position component - adding job positions to the heroes;
- authorization guard preventing non logged in users from viewing job positions (auth.guard.ts, profile-control.service.ts);
- info about login status in the main page;
- Admin component - intended for admin only;
- authorization guard preventing users from accessing the Admin component (returning getToken(); g-auth.guard.ts, s-auth.service.ts);
- FAQ component - a lazy loading component;
- an external, plain JavaScript file added to the app (current date and time at the top of the screen; App component).
<br><br><br>
![toh_main_descr](https://user-images.githubusercontent.com/75646880/122966071-2c2c1980-d389-11eb-8260-1d0f498c76ed.PNG)
<br><br><br><br>
![toh_main_denied_login](https://user-images.githubusercontent.com/75646880/122966070-2c2c1980-d389-11eb-96b4-74f54d573447.PNG)
<br><br><br><br>
![toh_main_access_login](https://user-images.githubusercontent.com/75646880/122967633-f5570300-d38a-11eb-8019-3c6dde48eb17.PNG)
<br><br><br><br>
![toh_main_denied_admin](https://user-images.githubusercontent.com/75646880/122966069-2b938300-d389-11eb-9245-ecf3b347db90.PNG)
<br><br><br><br>
![toh_main_allowed_admin](https://user-images.githubusercontent.com/75646880/122966637-d7d56980-d389-11eb-9940-92bcc7394fd0.PNG)
