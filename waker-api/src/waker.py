import os
import subprocess

from typing import List

from wakeonlan import send_magic_packet


#4c:cc:6a:81:99:24 MSI
def wake_up(mac_addresse : str):
    user = os.environ["SSH_USER"]
    host = os.environ["SSH_HOST"]
    ssh_key_path = os.environ["SSH_PRIVATE_KEY_PATH"]
    cmd = f"ssh -i {ssh_key_path} {user}@{host} wakeonlan {mac_addresse}"
    print(f"Sending : {cmd}")
    subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).communicate()
    return {"packet sent"}
