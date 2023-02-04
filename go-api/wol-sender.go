package main

import (
	"fmt"
	"net"

	"github.com/mdlayher/wol"
)

func sendWoL(mac_address string) {
	client, err := wol.NewClient()

	if err != nil {
		fmt.Println(err)
	}
	hardwareAddr, err := net.ParseMAC(mac_address)
	err = client.Wake("255.255.255.255:9", hardwareAddr)
	if err != nil {
		fmt.Println(err)
	}
}
