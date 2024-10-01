import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import "../db/envConfig";

const runMigrate = async () => {
	if (!process.env.DATABASE_URL) {
		throw new Error("DATABASE_URL is not defined");
	}

	const connection = postgres(process.env.DATABASE_URL, { max: 1 });

	const db = drizzle(connection);

	const start = Date.now();

	await migrate(db, { migrationsFolder: "lib/db/migrations" });

	const end = Date.now();

	process.exit(0);
}

runMigrate().catch((err) => {
	console.error("❌ Migration failed");
	console.error(err);
	process.exit(1);
});
