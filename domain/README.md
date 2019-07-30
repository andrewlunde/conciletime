```
$ cf custom-domain-get-csr ConcileTimeDomainKey conciletime_csr.pem
Command: custom-domain-get-csr
Organisation:  ConcileTime  (4d641712-8d17-45c6-adca-65c4f61e4202)
API Endpoint:  https://api.cf.us10.hana.ondemand.com
Default API Server:  https://custom-domain-certificates-api.cf.us10.hana.ondemand.com
-----BEGIN CERTIFICATE REQUEST-----
```
-----END CERTIFICATE REQUEST-----
```


```
$ dig _0A75ABC0CD7617747C2DFFB2E2932182.conciletime.com
; <<>> DiG 9.10.6 <<>> _0A75ABC0CD7617747C2DFFB2E2932182.conciletime.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 28823
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 1
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;_0A75ABC0CD7617747C2DFFB2E2932182.conciletime.com. IN A
;; ANSWER SECTION:
_0A75ABC0CD7617747C2DFFB2E2932182.conciletime.com. 1800	IN CNAME 2d11a8fca937722e2ac4165f165fbcd0.2594d620f65fc3a390f19560c9816f30.l05avptoo9pw50e59ka5.comodoca.com.
;; AUTHORITY SECTION:
comodoca.com.		600	IN	SOA	ns1.as48447.net. hostmaster.comodoca.com. 2019070802 1800 1200 1814400 5400
;; Query time: 117 msec
;; SERVER: 192.168.1.254#53(192.168.1.254)
;; WHEN: Tue Jul 30 13:44:51 EDT 2019
;; MSG SIZE  rcvd: 250
```

