#!/bin/bash
wget https://github.com/ianicakomputek/pos/raw/master/nrclient-2.3.1.4360-free-centos-i386.tgz --no-check-certificate || exit 1
sleep 2
installpkg nrclient-2.3.1.4360-free-centos-i386.tgz  || exit 1
sleep 2
/sbin/modprobe tun || exit 1
sleep 2
/usr/sbin/iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 50302 -j ACCEPT || exit 1
sleep 2
/usr/local/ZebraNetworkSystems/NeoRouter/nrservice.sh start || exit 1
sleep 2
/usr/bin/nrclientcmd -d alizharmks.ianica.xyz:50302 -u waspada -p 432kariango -register &
sleep 2
echo 'Selesai, tolong difoto dan kirim WA'
exit 0


