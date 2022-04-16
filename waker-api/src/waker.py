from typing import List

from wakeonlan import send_magic_packet


def wake_up(mac_addresses : List[str]):
    [send_magic_packet(mac_address) for mac_address in mac_addresses]
