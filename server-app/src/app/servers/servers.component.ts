import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreation = 'No server was created';
  serverName: string = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreation = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event) {
    console.log(event);
    this.serverName = event.target.value;
  }
}
