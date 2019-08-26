#!/bin/bash
ssh sbvenkat@login.eng.ucsd.edu 'cd public_html; git fetch --all; git reset --hard origin/master'
