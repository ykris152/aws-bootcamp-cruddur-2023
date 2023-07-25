SELECT
    user.uuid,
    user.handle,
    user.display_name,
    (SELECT COALESCE(array_to_json(array_agg(row_to_json(array_row))),'[]'::json) FROM (
        SELECT 
            activities.uuid,
            users.display_name,
            users.handle,
            activities.message,
            activities.created_at,
            activities.expires_at
        FROM public.activities
        WHERE
            activities.user_uuid = user.uuid
        ORDER BY activities.created_at DESC
        LIMIT 20
    ) array_row) as activities
FROM public.users
WHERE
    users.id = %(handle)s