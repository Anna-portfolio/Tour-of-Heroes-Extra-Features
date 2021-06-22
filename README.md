The official <a href="https://angular.io/tutorial">"Tour of Heroes" Angular tutorial app</a> with additional features (based on the <a href="https://www.skillsoft.com/channel/angular-f3619a61-1944-11e7-b488-c198130a9b04?technologyandversion=84199&expertiselevel=84192">Percipio courses</a> and my own ideas)

Extra Features include:
- Position component - adding job positions to the heroes;
- authorization guard preventing non logged in users from viewing job positions (auth.guard.ts, profile-control.service.ts);
- info about login status in the main page;
- Admin component - intended for admin only;
- authorization guard preventing users from accessing the Admin component (returning getToken(); g-auth.guard.ts, s-auth.service.ts);
- FAQ component - a lazy loading component;
- an external, plain JavaScript file added to the app (current time & date at the top of the screen; App component);

