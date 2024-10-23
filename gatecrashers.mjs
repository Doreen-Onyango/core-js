import http from 'http'
import fs from 'fs/promises'
import path from 'path'

const port = 5000;
const base_dir = process.cwd();

const authorized_users = {
    'Caleb_Squires': 'abracadabra', 'Tyrique_Dalton': 'abracadabra', 'Rahima_Young': 'abracadabra'
}

const parse_auth_header = (auth_header) => {
    if (!auth_header || !auth_header.startsWith('Basic ')) return null;
    const credentials = auth_header.slice(6);
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':')
    return { username, password }
}

