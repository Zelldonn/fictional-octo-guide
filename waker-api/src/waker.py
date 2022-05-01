import os
import subprocess

from operator import sub


# 4c:cc:6a:81:99:24 MSI
def wake_up(mac_address: str):
    ssh_key_path = os.environ["SSH_PRIVATE_KEY_PATH"]
    user = os.environ["SSH_USER"]
    host = os.environ["SSH_HOST"]
    port = os.environ["SSH_PORT"]

    cmd = f"ssh -i {ssh_key_path} {user}@{host} -p {port} wakeonlan {mac_address}"
    print(f"Sending : {cmd}")
    p = subprocess.Popen(
        cmd,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return {"packet sent"}
