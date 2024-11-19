json.extract! challenge, :id, :step_id, :title, :problem, :difficulty, :created_at, :updated_at
json.url challenge_url(challenge, format: :json)
