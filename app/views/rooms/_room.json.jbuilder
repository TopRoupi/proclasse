json.extract! room, :id, :code, :name, :professor_id, :created_at, :updated_at
json.url room_url(room, format: :json)
