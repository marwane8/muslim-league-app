-- -----------------------------------------------------
-- Roster View 
-- -----------------------------------------------------
CREATE VIEW `roster` AS
    SELECT 
        `players`.`player_id` AS `id`,
        `teams`.`team_id` AS `team_id`,
        `teams`.`team_name` AS `team_name`,
        `players`.`player_name` AS `player_name`,
        `players`.`player_number` AS `player_number`,
        `players`.`player_pos` AS `player_pos`
    FROM
        ((`teams_players` `tp`
        LEFT JOIN `teams` ON ((`tp`.`team_id` = `teams`.`team_id`)))
        LEFT JOIN `players` ON ((`tp`.`player_id` = `players`.`player_id`)))

-- Example Select Statement
SELECT * FROM roster WHERE team_id=16;

