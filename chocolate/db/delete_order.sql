DELETE FROM orders
    WHERE id = $1
    AND user_id = $2
;