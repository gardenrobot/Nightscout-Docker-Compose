db.createUser(
        {
            user: "nsdb",
            pwd: "PASSWORD HERE",
            roles: [
                {
                    role: "readWrite",
                    db: "nsdb"
                }
            ]
        }
);
