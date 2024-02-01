<h1>Lab 4</h1>

I have used Replicaset over Statefulset, because I have double checked about every images (ganache,dapp and react). It doesn't change inside. So there was no need for creating statefulset.

<h1>Ruuning Every Object in my cluster</h1>

<img width="634" alt="all" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/86b4a5d0-0996-4ff9-8763-0e7e94a8997c"><br>

<h1>Port forwardings of deployments</h1>

<h2>Ganach:</h2>

<img width="731" alt="ganache" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/8647f86d-cc63-4152-8098-0c6ca4bc89f4"><br>
<h2>Dapp-server:</h2>
<img width="1465" alt="server" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/6aeb0f35-4ba6-47ae-b5ba-359286e711c7"><br>

<img width="636" alt="pod-logs" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/75efb35e-efc8-4d4c-a8ac-3d8dcb9141b3"><br>
<h2>front-react:</h2>
<img width="1442" alt="react" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/6d18cae5-3f46-4e2b-af0c-9fe9dad772fb">

<h1>Creating a Persistent Volume:</h1>
<br>
<img width="562" alt="pv" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/df36edd3-7947-4fc6-ba9f-18319b9eac3b"><br>

<h1>Horizontal scalling on Dapp-server deployment:</h1>
<br>
- I have applied horizontal scalling on my Dapp-server deployment by making 5 replicas hitting following command.<br>
<img width="680" alt="scalling" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/38f1e31d-1807-4267-9300-f6004205b69f"><br>

<h1>Load Balancing on Dapp-server deployment using Nordport:</h1>
<br>
- I used nordPort service on my dapp-server to handle load balancing.
-Though Using Ingress service on this deployment doesn't make any sense since I haven't deployed my dapp server application to the cloud.<br>
<img width="1006" alt="load balancing" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/cf2839ef-c411-4cce-b478-35b68bd33944"><br>

<h1>Config mapping on deployment:</h1>
<br>
- well,in this project, we are not using sensitive data. Though, instead I have used config map by passing desired port number through config map.<br>
<img width="551" alt="Screenshot 2024-02-01 at 1 44 41 AM" src="https://github.com/harshil3662/building-scalable-app/assets/87032930/79bec713-dc94-4e91-a346-c6f175b45905">

